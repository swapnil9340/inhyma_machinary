import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../../public/About_3.png";
import Image from "next/image";

const cardDetails = [
  {
    img: img1,
    title: "Our Vision",
    description:
      "To become a global leader in packaging and automation by continuously evolving with cutting-edge technology, outstanding service, and industry expertise.",
  },
  {
    img: img1,
    title: "Our Mission",
    description:
      "To deliver high-quality, innovative, and cost-effective packaging and material handling solutions that empower businesses to optimize operations and scale efficiently.",
  },
];

export const Vision = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 6, md: 5 }, mb: { xs: 6, md: 5 } }}>
      <Grid container spacing={4} sx={{ width: "90%", maxWidth: "1200px" }}>
        {cardDetails.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                background: "#E7F4FF",
                borderRadius: 2,
                p: { xs: 2, md: 4 },
                display: "flex",
                gap: { xs: 2, md: 4 },
                alignItems: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                flexDirection: { xs: "column", sm: "row" },
                height: "100%",
              }}
            >
              <Box sx={{ minWidth: 120, width: { xs: "100%", sm: 150 }, height: 120, position: "relative" }}>
                <Image src={card.img} alt={card.title} fill style={{ objectFit: "contain" }} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#243E60",
                    fontSize: { xs: "20px", md: "24px" },
                    mb: 1,
                    textAlign: { xs: "center", sm: "left" },
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#000",
                    textAlign: "justify",
                    lineHeight: { xs: "22px", md: "26px" },
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
