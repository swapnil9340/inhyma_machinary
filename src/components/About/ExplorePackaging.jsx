import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
export default function ExplorePackaging() {
  const router = useRouter();
  
  return (
    <Box
      sx={{
        py: { xs: 5, md: 3 },
        px: { xs: 2, md: 3 },
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
          <Button onClick={()=>router.push('/product')} variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            Explore Products
          </Button>
          <Button onClick={()=>router.push('/')} variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            View Solutions
          </Button>
          <Button  onClick={()=>router.push('/contact-us')} variant="contained" sx={{ bgcolor: '#1955A6', color: '#fff', px: 4 }}>
            Contact Our Team
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
