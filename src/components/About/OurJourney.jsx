import React from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const milestones = [
  { year: '2011', detail: 'Inception as Darsh Enterprise' },
  { year: '2015', detail: 'Expanded to include import/export operations' },
  { year: '2018', detail: 'Added MHE category' },
  { year: '2022', detail: 'Rebranded to INHYMA Solutions LLP' },
  { year: '2024', detail: 'Global expansion across Africa and Southeast Asia' },
];

export default function OurJourney() {
  return (
    <Box
      sx={{
        backgroundColor: '#eaf4fc',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        mt: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{ width: '90%', maxWidth: '1200px' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, color: '#243E60' }}>
            From Darsh Enterprise to
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '24px', md: '28px' },
              fontWeight: 700,
              color: '#1955A6',
              mt: 1,
            }}
          >
            INHYMA – Our Journey
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: '#243E60',
              fontSize: { xs: '20px', md: '26px' },
              mb: 2,
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Key Milestones
          </Typography>

          <List sx={{ listStyleType: 'disc', pl: 3 }}>
            {milestones.map((item, index) => (
              <ListItem key={index} sx={{ display: 'list-item', py: 0.5 }}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: '#606872', fontSize: '16px' }}>
                      <strong>{item.year}:</strong> {item.detail}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
