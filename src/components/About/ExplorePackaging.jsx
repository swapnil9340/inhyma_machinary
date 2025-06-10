import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function ExplorePackaging() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: '800px', width: '100%' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: '#243E60', fontSize: { xs: '20px', md: '24px' } }}
        >
          Let’s Build the Future of Packaging Together
        </Typography>

        <Typography
          sx={{
            color: '#606872',
            fontSize: { xs: '16px', md: '18px' },
            mb: 4,
            lineHeight: { xs: '24px', md: '28px' },
          }}
        >
          Explore our complete line of packaging and handling solutions or connect with our team for a consultation.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            Explore Products
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            View Solutions
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            Contact Our Team
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
