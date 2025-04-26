import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutBanner = () => {
  return (
    <Box
    sx={{
      height: "300px",
      backgroundImage: `url('/Rectangle 1.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      py: 5,
      px: 2,
      paddingTop: "20px",
      display: "grid",
      placeContent: "center",
    }}
  >
    <Box
      sx={{
        display: "grid",
        textAlign: {
          xs: "center",
          md: "center",
        },
        placeContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "#53657D", fontSize: "56px" }}>
        Engineering the Future of Packaging & Automation
      </Typography>
      <Typography variant="h4" sx={{ color: "#53657D" }}>
        Decades of experience. Global reach. Tailored packaging <br /> and
        handling solutions that power industry performance.
      </Typography>
    </Box>
  </Box>
  )
}

export default AboutBanner