import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import defaultImg from "../../../public/none_img.png";
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
    <Box sx={{ display: "grid", placeItems: "center", py: { xs: 4, md: 6 }, px: 2 }}>
      <Box sx={{ width: "90%", maxWidth: "1200px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "20px", md: "25px" },
            color: "#243E60",
            textAlign: { xs: "center", md: "left" },
            mb: 4,
            fontWeight: 600,
          }}
        >
          Quality You Can Rely On
        </Typography>

        <Grid container spacing={4} justifyContent={{ xs: "center", md: "flex-start" }}>
          {logos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1/1",
                  position: "relative",
                }}
              >
                <Image src={logo} alt={`logo-${index}`} fill style={{ objectFit: "contain" }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Quality;
