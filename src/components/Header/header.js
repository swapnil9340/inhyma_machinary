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

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box sx={headerStyles.wrapper}>
        {/* Show AddressBar only on desktop */}
        {!isMobile && <AddressBar />}

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
                style={{ objectFit: "contain" }}
              />
            </Box>

            {!isMobile && <SearchBar />}
            {!isMobile && <AuthSection />}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box>
            <List>
              <ListItem>
                <SearchBar />
              </ListItem>
              <Divider />
              <ListItem>
                <AuthSection />
              </ListItem>
            </List>
          </Box>

          {/* AddressBar at bottom of drawer on mobile */}
          <Box sx={{ px: 1, py: 1, borderTop: "1px solid #eee" }}>
            <AddressBar />
          </Box>
        </Box>
      </Drawer>
    </motion.div>
  );
};

export default Header;
