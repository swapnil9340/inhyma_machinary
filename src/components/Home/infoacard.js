import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BuildIcon from "@mui/icons-material/Build";
import PublicIcon from "@mui/icons-material/Public";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const trustPoints = [
  {
    icon: <CategoryIcon color="primary" />,
    text: "150+ Products in 13 Categories",
  },
  {
    icon: <EmojiEventsIcon color="primary" />,
    text: "13+ Years Industry Expertise",
  },
  {
    icon: <BuildIcon color="primary" />,
    text: "After-Sales Service & Spare Parts Availability",
  },
  {
    icon: <PublicIcon color="primary" />,
    text: "Fast Global Delivery – India, Africa, China, UAE",
  },
  {
    icon: <PrecisionManufacturingIcon color="primary" />,
    text: "Tailored Automation for Any Scale",
  },
];

const WhyTrustSection = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f5faff" , justifyContent:"center",display:"flex" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/asian-female-engineer.png"
              alt="Worker with machinery"
              width={400}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            <span style={{ color: "#f05423", fontWeight: 700 }}>|</span>{" "}
            Why Businesses Trust INHYMA
          </Typography>
          <Stack spacing={2}>
            {trustPoints.map((point, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: 2 }}>{point.icon}</Box>
                <Typography>{point.text}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyTrustSection;
