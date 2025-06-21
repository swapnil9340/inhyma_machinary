import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
} from "@mui/material";
import tickIcon from "../../../public/tick.svg";
import img1 from "../../../public/About_4.png";
import Image from "next/image";
import { useRouter } from 'next/router';
const features = [
  "150+ Products Across 13 Categories",
  "Global Supply & Logistics Network",
  "Customizable Automation Solutions",
  "Dedicated After-Sales Support",
  "Partnerships in India, Africa, and Southeast Asia",
  "Warehouse Locations in Mumbai & Chennai",
];

export default function WhyChooseUs() {
   const router = useRouter();


  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 5 },
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left Text & Features */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "22px", md: "26px" },
              color: "#243E60",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Why Choose INHYMA Solutions LLP?
          </Typography>

          {/* Mobile Image */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "relative",
              height: 220,
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
              mb: 2,
            }}
          >
            <Image
              src={img1}
              alt="INHYMA mobile"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </Box>

          {/* Features */}
          <List sx={{ pl: 0 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 1.2,
                  justifyContent: "start",
                }}
              >
                <Box sx={{ position: "relative", width: 20, height: 20, mt: "4px" }}>
                  <Image src={tickIcon} alt="tick" fill />
                </Box>
                <Typography
                  sx={{
                    color: "#606872",
                    fontSize: { xs: "14px", md: "15px" },
                    textAlign: "left",
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </List>

          <Button
            variant="contained"
onClick={()=>router.push('/product')}
            sx={{
              mt: 3,
              backgroundColor: "#1955A6",
              fontSize: "15px",
              px: 3,
              py: 1,
              textTransform: "capitalize",
            }}
           
          >
            Explore Our Product Range
          </Button>
        </Grid>

        {/* Desktop Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 350,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={img1}
              alt="INHYMA desktop"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
