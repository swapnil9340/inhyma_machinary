import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tickImg from "../../../public/tick.svg";

const Headline = () => {
  return (
    <Container disableGutters sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: 30, height: 30, position: 'relative' }}>
            <Image src={tickImg} alt="tick" fill style={{ objectFit: 'contain' }} />
          </Box>
          <Typography sx={{ color: '#606872', fontSize: { xs: '18px', md: '24px' }, fontWeight: 500 }}>
            Driven by Purpose. Inspired by Innovation.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Headline;
