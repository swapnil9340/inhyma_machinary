import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FoundersMessage() {
  return (
    <Box
      sx={{
        backgroundColor: '#eaf4fc',
        py: { xs: 5, md: 3 },
        px: { xs: 2, md: 3 },
        mt: 3,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '800px', width: '100%' }}>
        <Typography
          variant="h6"
          fontWeight="medium"
          gutterBottom
          sx={{ color: '#243E60', fontSize: { xs: '20px', md: '26px' } }}
        >
          Message from the Founders
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            mb: 3,
            fontSize: { xs: '16px', md: '18px' },
            textAlign: 'justify',
            lineHeight: { xs: '22px', md: '28px' },
            color: '#606872',
          }}
        >
          “At INHYMA, we don’t just build machines — we build partnerships and empower businesses to
          scale smarter. Every solution we deliver is a reflection of our commitment to quality,
          reliability, and customer success.”
        </Typography>

        <Typography sx={{ color: '#1955A6', fontSize: { xs: '16px', md: '20px' }, fontWeight: 600 }}>
          — Managing Partner, INHYMA Solutions LLP
        </Typography>
      </Box>
    </Box>
  );
}
