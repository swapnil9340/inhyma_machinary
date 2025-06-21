'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Blogs', href: '/blog' },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        px: { xs: 3, md: 8 },
        py: 2,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f1f1f1',
        position: 'sticky',
        top: 0,
        // zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 2, md: 4 },
        flexWrap: 'wrap',
      }}
    >
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Box
            key={item.label}
            sx={{
              position: 'relative',
              '&:hover .underline': {
                width: '100%',
              },
            }}
          >
            <Link
              href={item.href}
              style={{
                padding: '6px 0',
                fontWeight: 500,
                fontSize: '16px',
                color: active ? '#1976d2' : '#444',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
            </Link>
            <Box
              className="underline"
              sx={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                height: '2px',
                width: active ? '100%' : '0%',
                backgroundColor: '#1976d2',
                transition: 'width 0.3s ease',
                borderRadius: '1px',
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Navbar;
