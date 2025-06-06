import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

const milestones = [
  { year: '2011', detail: 'Inception as Darsh Enterprise' },
  { year: '2015', detail: 'Expanded to include import/export operations' },
  { year: '2018', detail: 'Added MHE category' },
  { year: '2022', detail: 'Rebranded to INHYMA Solutions LLP' },
  { year: '2024', detail: 'Global expansion across Africa and Southeast Asia' },
];

export default function OurJourney() {
  return (
    <Box sx={{ backgroundColor: '#eaf4fc', py: 6, px:{xs : 2 , md: 4} ,mt:10, display: "grid", placeItems: "center" }}>

      <Grid container spacing={4} alignItems="center" justifyContent={"space-between"} sx={{ width: "90%" }}>
        <Grid item  size={{xs:12 , md:6}} sx={{textAlign :{xs:"center" ,md:"left"}}}  >
          <Typography variant="h6" color="text.primary" sx={{ fontSize: {xs:"22px"  , md:"30px"} }}>
            From Darsh Enterprise to
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="primary" sx={{ fontSize: {xs:"20px"  , md:"30px"} }}>
            INHYMA – Our Journey
          </Typography>
        </Grid>

        <Grid item size={{xs:12 , md:6}}>
          <Typography sx={{ color: "#243E60", fontSize: {xs:"22px"  , md:"32px"} }} mb={2}>
            Use a horizontal timeline or animated cards:
          </Typography>
          <Box
            sx={{
              '& li::marker': {
                color: '##606872',
              }
            }}
          >
            {milestones.map((item, index) => {
              return <Typography component={"li"} sx={{ fontSize: {xs : "20px" , md:"25px"}, color: "#606872" }}><span style={{fontWeight:600}}>{item.year}:</span> {item.detail}</Typography>

            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
