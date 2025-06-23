// Converts: "Smart Packaging Machine" → "smart-packaging-machine"
export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-");         // replace spaces with hyphens
}


// Converts: "smart-packaging-machine" → "Smart Packaging Machine"
export function parseSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize each word
}
