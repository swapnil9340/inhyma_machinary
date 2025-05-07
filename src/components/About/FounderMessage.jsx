import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function FoundersMessage() {
  return (
    <Box sx={{ backgroundColor: '#eaf4fc', py: 6, px: {xs:2 ,md:4},mt:10, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="medium" gutterBottom sx={{color : "#243E60" ,fontSize: {xs:"28px"  , md:"48px"}}}>
        Message from the Founders
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        sx={{ maxWidth: "90%", mx: 'auto', mb: 2 , fontSize: {xs:"22px"  , md:"32px"} ,textAlign : {xs:"justify"} }}
      >
        “At INHYMA, we don’t just build machines — we build partnerships and empower businesses to
        scale smarter. Every solution we deliver is a reflection of our commitment to quality,
        reliability, and customer success.”
      </Typography>

      <Typography sx={{color : "#1955A6" , fontSize: {xs:"18px"  , md:"28px"}}}> 
        — Managing Partner, INHYMA Solutions LLP
        </Typography>
    </Box>
  );
}
