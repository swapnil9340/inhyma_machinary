// One-time migration: MUI Grid v1 -> v2 for this project.
// - Removes `item` prop
// - Converts xs/sm/md/lg/xl props into size={{ ... }}
// - Skips JSX inside JS line comments (// ...) and block comments (/* ... */).
// Safe to re-run.

import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../src/components/', import.meta.url).pathname.replace(/^\//, '');
// On Windows, URL pathname starts with '/' before the drive letter. Strip it.
const COMPONENTS_DIR = ROOT;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(jsx?|tsx?)$/.test(entry)) out.push(full);
  }
  return out;
}

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

function migrateGridTag(tag) {
  // tag is the inside of <Grid ...> WITHOUT the leading "<Grid" and trailing ">"/"/>"
  // We work on the props portion.

  // Skip if it's a closing tag chunk we don't own. Caller passes only opening-tag props.

  // 1) Determine if this tag uses `item` prop or any breakpoint props.
  const hasItem = /\bitem\b/.test(tag);
  const breakpointMatches = {};
  for (const bp of BREAKPOINTS) {
    // match `bp={value}` or `bp="value"` (rare). Value can include braces/numbers/strings.
    const re = new RegExp(`\\b${bp}=\\{([^}]+)\\}`);
    const m = tag.match(re);
    if (m) breakpointMatches[bp] = m[1].trim();
  }

  const hasExistingSize = /\bsize=\{/.test(tag);
  const hasAnyBp = Object.keys(breakpointMatches).length > 0;

  if (!hasItem && !hasAnyBp) return null; // nothing to do

  let next = tag;

  // Remove `item` prop (with optional surrounding whitespace) — handle " item " / " item" / "item ".
  next = next.replace(/\s+item\b/, '').replace(/^item\b\s*/, '');

  // Remove individual breakpoint props.
  for (const bp of BREAKPOINTS) {
    const re = new RegExp(`\\s*\\b${bp}=\\{[^}]+\\}`, 'g');
    next = next.replace(re, '');
  }

  // Build size={{ ... }} if we collected any breakpoint values AND there isn't an existing size.
  if (hasAnyBp && !hasExistingSize) {
    const parts = BREAKPOINTS
      .filter((bp) => breakpointMatches[bp] != null)
      .map((bp) => `${bp}: ${breakpointMatches[bp]}`)
      .join(', ');
    const sizeProp = ` size={{ ${parts} }}`;
    // Insert after the first whitespace following any leading prop run, or at the start.
    // Simpler: append at the end of the props (before trailing whitespace).
    next = next.replace(/\s*$/, '') + sizeProp;
  }

  // Collapse repeated spaces from removals.
  next = next.replace(/\s{2,}/g, ' ');

  return next === tag ? null : next;
}

function processFile(filePath) {
  const src = readFileSync(filePath, 'utf8');
  let changed = false;
  let out = '';
  let i = 0;
  const n = src.length;

  while (i < n) {
    // Skip block comments
    if (src[i] === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      const stop = end === -1 ? n : end + 2;
      out += src.slice(i, stop);
      i = stop;
      continue;
    }
    // Skip line comments — but NOT JSX-attribute slashes. Easiest heuristic:
    // a line comment starts when "//" appears at column 0 or after whitespace at line start,
    // OR after any non-JSX context. To stay safe, only skip if previous non-space char on the line is empty.
    if (src[i] === '/' && src[i + 1] === '/') {
      // Look back to find start of current line
      const lineStart = src.lastIndexOf('\n', i - 1) + 1;
      const before = src.slice(lineStart, i);
      if (/^\s*$/.test(before)) {
        const eol = src.indexOf('\n', i);
        const stop = eol === -1 ? n : eol;
        out += src.slice(i, stop);
        i = stop;
        continue;
      }
    }

    // Match an opening Grid tag: <Grid ...> or <Grid ... />
    if (src[i] === '<' && src.slice(i + 1, i + 6) === 'Grid ' || (src[i] === '<' && src.slice(i + 1, i + 5) === 'Grid' && (src[i + 5] === ' ' || src[i + 5] === '\n' || src[i + 5] === '\t'))) {
      // Find the end of the tag, accounting for `{...}` braces and strings.
      let j = i + 5; // after "<Grid"
      let depth = 0;
      let inString = null;
      while (j < n) {
        const c = src[j];
        if (inString) {
          if (c === inString && src[j - 1] !== '\\') inString = null;
        } else if (c === '"' || c === '\'' || c === '`') {
          inString = c;
        } else if (c === '{') {
          depth++;
        } else if (c === '}') {
          depth--;
        } else if (c === '>' && depth === 0) {
          break;
        }
        j++;
      }
      if (j >= n) {
        out += src.slice(i);
        i = n;
        break;
      }
      // tag content is src[i+5..j], including possible trailing "/"
      const openLen = j - (i + 5);
      const inner = src.slice(i + 5, j);
      const selfClosing = inner.endsWith('/');
      const propsOnly = selfClosing ? inner.slice(0, -1) : inner;

      const newProps = migrateGridTag(propsOnly);
      if (newProps != null) {
        changed = true;
        out += '<Grid' + newProps + (selfClosing ? '/' : '') + '>';
      } else {
        out += '<Grid' + inner + '>';
      }
      i = j + 1;
      continue;
    }

    out += src[i];
    i++;
  }

  if (changed) {
    writeFileSync(filePath, out, 'utf8');
    return true;
  }
  return false;
}

const files = walk(COMPONENTS_DIR);
let count = 0;
for (const f of files) {
  if (processFile(f)) {
    count++;
    console.log('migrated:', f);
  }
}
console.log(`\nDone. Files changed: ${count}`);
