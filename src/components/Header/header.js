"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { headerStyles } from "./Header.styles";
import AddressBar from "./AddressBar";
import SearchBar from "./SearchBar";
import AuthSection from "./AuthSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

import { usePathname } from "next/navigation";
import Link from "next/link";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blogs", href: "/blog" },
];
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter()
  const pathname = usePathname();
  const handleNavigate = (href) => {
    router.push(href);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box sx={headerStyles.wrapper}>
        {/* Show AddressBar only on desktop */}
        {/* {!isMobile && <AddressBar />} */}

        <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", boxShadow: "none" }}>
          <Toolbar sx={headerStyles.mainHeader}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {isMobile && (
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon sx={{ color: "#606872" }} />
                </IconButton>
              )}
              <Image
                src="/INHYMA_FINAL_LOGO_C2C 1 (1).png"
                alt="Inhyma Logo"
                height={40}
                width={140}
                style={{ objectFit: "contain" , cursor :"pointer" }}
                onClick={()=>handleNavigate("/")}
              />
            </Box>

            {!isMobile && <SearchBar />}
            {!isMobile && <AuthSection />}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Drawer */}
       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
  <motion.div
    initial={{ x: -280 }}
    animate={{ x: 0 }}
    exit={{ x: -280 }}
    transition={{ type: "tween", duration: 0.4 }}
  >
    <Box
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full height to ensure footer sticks
        backgroundColor: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Scrollable main section */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <List sx={{ py: 0 }}>
          <ListItem sx={{ justifyContent: "center", py: 2 }}>
            <Image
              src="/INHYMA_FINAL_LOGO_C2C 1 (1).png"
              alt="Inhyma Logo"
              height={40}
              width={140}
              style={{ objectFit: "contain", cursor: "pointer" }}
              onClick={() => handleNavigate("/")}
            />
          </ListItem>

          {/* Soft gradient line */}
          <Box
            sx={{
              height: "2px",
              background: "linear-gradient(to right, #d1d1d1, #f5f5f5, transparent)",
              mx: 3,
              mb: 1,
              borderRadius: 2,
            }}
          />

          {navItems.map((item) => (
            <ListItem
              key={item.label}
              sx={{
                px: 3,
                py: 1.2,
                backgroundColor: isActive(item.href) ? "#F2F7FD" : "transparent",
                borderLeft: isActive(item.href) ? "4px solid #1955A6" : "4px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f8f8f8",
                },
              }}
            >
              <Link
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: isActive(item.href) ? "#1955A6" : "#333",
                  fontWeight: 500,
                  width: "100%",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}

          <Divider sx={{ my: 2 }} />
          <ListItem>{/* Optional Auth/Search here */}</ListItem>
        </List>
      </Box>

      {/* Sticky bottom AddressBar */}
      <Box
        sx={{
          px: 1,
          py: 1,
          borderTop: "1px solid #eee",
          backgroundColor: "#fff",
        }}
      >
        <AddressBar />
      </Box>
    </Box>
  </motion.div>
</Drawer>

    </motion.div>
  );
};

export default Header;


