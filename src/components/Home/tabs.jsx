import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';

const NavbarWithDropdownTabs = () => {
  const [value, setValue] = useState(0);
  const router = useRouter()
  const [anchorElResources, setAnchorElResources] = useState(null);
  const [anchorElProducts, setAnchorElProducts] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleResourcesClick = (event) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleProductsClick = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElResources(null);
    setAnchorElProducts(null);
  };

  const handleNavigate = (navprops)=>{
    router.push(navprops)
  }
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        minHeight:"50px",
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', minHeight: '50px', height: '50px' }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          centered
          TabIndicatorProps={{ style: { display: 'none' } }} // 👈 underline hata diya
          sx={{
            minHeight: '50px',
            height: '50px',
            '& .MuiTab-root': {
              minHeight: '50px',
              height: '50px',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '14px',
              paddingX: 2,
              borderRadius: 1,
              '&.Mui-selected': {
                backgroundColor: '#f0f0f0', // 👈 active tab background color
              },
              '&:hover': {
                backgroundColor: '#f9f9f9', // 👈 hover pe halka grey
              },
            },
          }}
        >
          <Tab label="Home" />

          {/* Resources dropdown */}
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} onClick={handleResourcesClick}>
                Resources <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
              </Box>
            }
          />

          {/* Product Categories dropdown */}
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} onClick={handleProductsClick}>
                Product Categories <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
              </Box>
            }
          />

          <Tab label="Contact Us" onClick={()=>handleNavigate("/contact-us")} />
        </Tabs>

        {/* Resources Menu */}
        <Menu
          anchorEl={anchorElResources}
          open={Boolean(anchorElResources)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={()=>handleNavigate("/blog")}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Guides</MenuItem>
          <MenuItem onClick={handleClose}>Help Center</MenuItem>
        </Menu>

        {/* Product Categories Menu */}
        <Menu
          anchorEl={anchorElProducts}
          open={Boolean(anchorElProducts)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={handleClose}>Electronics</MenuItem>
          <MenuItem onClick={handleClose}>Industrial</MenuItem>
          <MenuItem onClick={handleClose}>Construction</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarWithDropdownTabs;
