import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";


const CTASection = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #0C4DA2, #167DFF)",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 5,
        borderRadius: "8px",
        mx: { xs: 2, md: 8 },
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={7}>
          <Typography variant="h5" fontWeight={700}>
            Need Help Choosing the Right Machine?
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Let us help you automate packaging the right way.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "flex-end",
            gap: 2,
            mt: isMobile ? 2 : 0,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#0C4DA2",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
          >
            Talk To An Expert
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#0C4DA2",
              },
            }}
          >
            Request A Free Quote
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default CTASection