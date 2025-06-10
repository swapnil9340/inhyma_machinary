import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import tickIcon from "../../../public/tick.svg";
import img1 from "../../../public/About_4.png";
import Image from "next/image";

const features = [
  "150+ Products Across 13 Categories",
  "Global Supply & Logistics Network",
  "Customizable Automation Solutions",
  "Dedicated After-Sales Support",
  "Partnerships in India, Africa, and Southeast Asia",
  "Warehouse Locations in Mumbai & Chennai",
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ px: {xs:2 ,md:4}, py: {xs:4 ,md:6}, display: "grid", placeItems: "center" }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{ width: "90%" }}
      >
        <Grid item size={{xs:12  ,md:6}} >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "20px", md: "25px" }, color: "#243E60" }}
            gutterBottom
          >
            Why Choose INHYMA Solutions LLP?
          </Typography>
          <Grid item xs={12} md={6} sx={{ display : {xs:"block" ,md:"none" } ,mt:4}}>
          <Box sx={{position :"relative" ,height :"300px"}}>
                  <Image src={img1} layout="fill" style={{objectFit : "cover" ,objectPosition :"top"}}  />
          </Box>
        </Grid>
          <List>
            {features.map((feature, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "start",
                  gap: "10px",
                  marginLeft :"10px"
                }}
              >

            <Box
                sx={{
                  position :"relative",
                  width :"20px",
                  height :"28px",
                  justifySelf :"flex-start",
                  marginTop : {xs:"5px" ,md:0}
                }}
              >
                <Image
                  src={tickIcon}
                  layout="fill"
                />
                </Box>
                <Typography sx={{ color: "#606872", fontSize: {xs:"16px" ,md:"16px"} }}>    
                  {feature}
                </Typography>
              </Box>
            ))}
          </List>
          <Button sx={{ mt: 2, background: "#1955A6", color: "#fff" ,  marginLeft :{xs:"10px" ,md:0} }}>
            Explore Our Product Range
          </Button>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display : {xs:"none" ,md:"block"}}}>
          <Image src={img1} height={430} />
        </Grid>
      </Grid>
    </Box>
  );
}
