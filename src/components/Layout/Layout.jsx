import { Box } from "@mui/material";
import Header from "../Header/header";
// import Footer from "../Footer/Footer";
import { layoutStyles } from "./Layout.styles";
import Footer from "../Footer/footer";
import NavbarWithDropdownTabs from "../Home/tabs";

const Layout = ({ children }) => {
  return (
    <Box sx={layoutStyles.wrapper}>
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
