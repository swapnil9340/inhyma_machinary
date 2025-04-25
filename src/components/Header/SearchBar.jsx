"use client";

import {
  Box,
  TextField,
  MenuItem,
  InputBase,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";

const categories = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Fashion", value: "fashion" },
  { label: "Home & Kitchen", value: "home" },
];

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      style={{width:"60%"}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 1,
          mt: isMobile && 2 ,
        //   width:"100%"
        }}
      >
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: 720,
            display: "flex",
            alignItems: "center",
            borderRadius: 12,
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#0d47a1",
              boxShadow: "0 4px 24px rgba(13,71,161,0.15)",
            },
          }}
        >
          {/* Category Select */}
          <TextField
            select
            defaultValue="all"
            variant="standard"
            sx={{
              minWidth: 130,
              px: 2,
              borderRight: "1px solid #ddd",
              "& .MuiInputBase-root": {
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
              },
              "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                display: "none",
              },
            }}
            SelectProps={{
              IconComponent: KeyboardArrowDownIcon,
            }}
          >
            {categories.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Input Field */}
          <InputBase
            sx={{
              flex: 1,
              px: 2,
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: 400,
              color: "#333",
              "::placeholder": {
                color: "#888",
                fontStyle: "italic",
              },
            }}
            placeholder="Search for products, brands and more…"
            inputProps={{ "aria-label": "search input" }}
          />

          {/* Search Button */}
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
            <IconButton
              type="submit"
              sx={{
                backgroundColor: "#0d47a1",
                height: "100%",
                px: 3,
                borderRadius: 0,
                color: "#fff",
                borderLeft: "1px solid #ddd",
                "&:hover": {
                  backgroundColor: "#08306b",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SearchBar;
