import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import defaultImg from "../../../public/none_img.png"
import Image from 'next/image';

const logos = [
  defaultImg,
  defaultImg,
  defaultImg,
  defaultImg,
  defaultImg,
];

const Quality = () => {
  return (
    <Box sx={{display : "grid" ,placeItems :"center" ,mt:10 }}>
    <Box sx={{ py: 5, px: 2, width:"90%" }}>
      <Typography variant="h5" sx={{fontSize :"48px" , color :"#243E60"}}  gutterBottom>
        Quality You Can Rely On
      </Typography>

      <Grid container spacing={5} alignItems="center">
        {logos.map((src, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Image src={defaultImg} style={{ width : "300px" }} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default Quality;
