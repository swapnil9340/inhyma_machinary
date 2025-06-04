import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const NavbarWithDropdownTabs = () => {
  const [value, setValue] = useState(0);
  const pathname = usePathname();
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

  const handleNavigate = (navprops) => {
    router.push(navprops)
  }


  useEffect(() => {
    const url = pathname

    if (url?.includes("product_category")) setValue(2)
    else if (url?.includes("contact-us")) setValue(3)
    else if (url?.includes("blog")) setValue(1)
    else setValue(0)


  }, [pathname]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        minHeight: "50px",
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', minHeight: '50px', height: '50px' ,padding :0 }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          centered
          TabIndicatorProps={{ style: { display: 'none' } }} 
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
                backgroundColor: '#f0f0f0', 
              },
              '&:hover': {
                backgroundColor: '#f9f9f9', 
              },
            },
          }}
        >
          <Tab label="Home" onClick={() => handleNavigate("/")} />
          <Tab label="Blogs" onClick={() => handleNavigate("/blog")}/>
          <Tab label="Product" onClick={() => handleNavigate("/product_category")}/>
          <Tab label="Contact Us" onClick={() => handleNavigate("/contact-us")} />
             <Tab label="About Us" onClick={() => handleNavigate("/about")} />
        </Tabs>

        {/* Resources Menu */}
        <Menu
          anchorEl={anchorElResources}
          open={Boolean(anchorElResources)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={() => handleNavigate("/blog")}>Blog</MenuItem>
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
          <MenuItem onClick={() => handleNavigate("/product_category")}>Electronics</MenuItem>
          <MenuItem onClick={handleClose}>Industrial</MenuItem>
          <MenuItem onClick={handleClose}>Construction</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarWithDropdownTabs;
