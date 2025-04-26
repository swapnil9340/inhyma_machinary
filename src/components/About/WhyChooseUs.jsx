import React from 'react';
import { Box, Typography, Button, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import tickIcon from '../../../public/tick.svg';
import img1 from '../../../public/About_4.png';
import Image from 'next/image';

const features = [
  '150+ Products Across 13 Categories',
  'Global Supply & Logistics Network',
  'Customizable Automation Solutions',
  'Dedicated After-Sales Support',
  'Partnerships in India, Africa, and Southeast Asia',
  'Warehouse Locations in Mumbai & Chennai'
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ px: 4, py: 6 , display:"grid" ,placeItems:"center" }}>
      <Grid container spacing={4} alignItems="center" justifyContent={"space-between"} sx={{width:'90%'}}>

        <Grid item xs={12} md={6}>
          <Typography variant='h4' sx={{fontSize:"48px" ,color:"#243E60"}} gutterBottom>
            Why Choose INHYMA Solutions LLP?
          </Typography>
          <List>
            {features.map((feature, index) => (
               <Box sx={{display : "flex",alignItems : 'center' ,justifyContent : 'start' ,gap :"10px"}}>
                          <Image src={tickIcon} style={{height : "auto" , width :"32px"}} />
                          <Typography sx={{color :"#606872" ,fontSize :  "32px"}}>{feature}
                          </Typography>
                </Box>
            ))}
          </List>
          <Button  sx={{ mt: 2 ,background :"#1955A6" ,color : "#fff" }}>
            Explore Our Product Range
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
               <Image
               src={img1}
               height={430}
               />
        </Grid>

      </Grid>
    </Box>
  );
}
