import { Box } from "@mui/material";
import { headerStyles } from "./Header.styles";
import AddressBar from "./AddressBar";
import SearchBar from "./SearchBar";
import AuthSection from "./AuthSection";
import Image from "next/image";
import { motion } from "framer-motion"; // 👈 animation ke liye

const Header = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }} // page load par upar se
      animate={{ y: 0, opacity: 1 }}    // smoothly neeche aayega
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box sx={headerStyles.wrapper}>
        <AddressBar />
        <Box sx={headerStyles.mainHeader}>
          <Image
            src="/INHYMA_FINAL_LOGO_C2C 1 (1).png"
            alt="Inhyma Logo"
            height={40}
            width={140}
            style={{ objectFit: "contain" }}
          />
          <SearchBar />
          <AuthSection />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Header;
