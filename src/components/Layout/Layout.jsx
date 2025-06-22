'use client';

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../Header/header";
import { layoutStyles } from "./Layout.styles";
import Footer from "../Footer/footer";
import NavbarWithDropdownTabs from "../Home/tabs";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const theme = useTheme();
  const showNavbar = useMediaQuery('(min-width:899px)');

  return (
    <Box sx={layoutStyles.wrapper}>
      <Header />
      <Box component="main" sx={layoutStyles.main}>
        {showNavbar && <NavbarWithDropdownTabs />}
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
