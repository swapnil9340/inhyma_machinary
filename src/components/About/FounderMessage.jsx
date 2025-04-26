import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function FoundersMessage() {
  return (
    <Box sx={{ backgroundColor: '#eaf4fc', py: 6, px: 4,mt:10, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="medium" gutterBottom sx={{color : "#243E60" ,fontSize : "48px"}}>
        Message from the Founders
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        sx={{ maxWidth: "90%", mx: 'auto', mb: 2 , fontSize : "32px" }}
      >
        “At INHYMA, we don’t just build machines—we build partnerships and empower businesses to
        scale smarter. Every solution we deliver is a reflection of our commitment to quality,
        reliability, and customer success.”
      </Typography>

      <Typography sx={{color : "#1955A6" ,fontSize :"28px"}}> 
        — Managing Partner, INHYMA Solutions LLP
        </Typography>
    </Box>
  );
}
