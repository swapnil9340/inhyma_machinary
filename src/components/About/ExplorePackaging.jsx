import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function ExplorePackaging() {
  return (
    <Box sx={{ py: 6, px: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{color : "#243E60" , fontSize :"48px"}} gutterBottom>
        Let’s Build the Future of Packaging Together
      </Typography>
      <Typography  sx={{color : "#000000" ,fontSize :"30px"}} mb={4}>
        Explore our complete line of packaging and handling solutions or connect with our team for a consultation.
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
        <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
          Explore Products
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
          Explore Products
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
          Contact Our Team
        </Button>
      </Stack>
    </Box>
  );
}
