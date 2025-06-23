import { Box, Typography } from '@mui/material';
import React from 'react';

const listData = [
  {
    heading: "Customer-Centric Approach",
    description: "We design solutions around your goals"
  },
  {
    heading: "Innovation & Excellence",
    description: "Our machines are built to outlast trends and deliver precision"
  },
  {
    heading: "Quality & Reliability",
    description: "Consistency you can trust in every cycle and shift"
  },
  {
    heading: "Sustainability & Responsibility",
    description: "Eco-friendly processes and ethical manufacturing"
  },
  {
    heading: "Integrity & Transparency",
    description: "Doing business the right way, every step of the way"
  },
];

const CoreValues = () => {
  return (
    <Box
      sx={{
        background: "#E7F4FF",
        display: "grid",
        placeItems: "center",
        py: { xs: 4, md: 3 },
        px: { xs: 2, md: 3 },
        gap: 4,
        mt: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: "700px" }}>
        <Typography sx={{ fontSize: { xs: "20px", md: "25px" }, color: "#606872" }}>
          Our Core Values
        </Typography>
        <Typography sx={{ color: "#243E60", fontSize: { xs: "20px", md: "25px" }, mt: 1 }}>
          Built on Integrity, Sustained by Excellence
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{
          listStyleType: 'disc',
          pl: 3,
          '& li': {
            fontSize: { xs: '16px', md: '18px' },
            color: '#606872',
            mb: 2,
            lineHeight: { xs: "24px", md: "28px" },
          },
          '& li::marker': {
            color: '#1955A6',
          },
          maxWidth: "800px"
        }}
      >
        {listData.map((item, idx) => (
          <li key={idx}>
            <strong style={{ color: "#1955A6" }}>{item.heading}:</strong> {item.description}
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default CoreValues;
