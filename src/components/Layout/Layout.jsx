import { Box } from "@mui/material";
import Header from "../Header/header";
// import Footer from "../Footer/Footer";
import { layoutStyles } from "./Layout.styles";
import Footer from "../Footer/footer";
import NavbarWithDropdownTabs from "../Home/tabs";
import "../../pages/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


const Layout = ({ children }) => {
  return (
    <Box sx={layoutStyles.wrapper} className={inter.className}>
      <Header />
      <Box component="main" sx={layoutStyles.main} >
        <NavbarWithDropdownTabs ></NavbarWithDropdownTabs>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
