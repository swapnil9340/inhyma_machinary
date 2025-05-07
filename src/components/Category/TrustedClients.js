import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";

export default function TrustedClients() {
  return (
    <Box sx={{ backgroundColor: "#F5F9FF", py: 6 }}>
    <Container maxWidth={"xl"} >
      <Grid container spacing={4} alignItems="center" justifyItems="center">
        {/* Left Side */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{placeItems :"center"}} >
          <Box>
          <Typography
            variant="h5"
            sx={{ color: "#53657D", fontWeight: "bold", mb: 3 ,fontSize:"3.5vmin" }}
          >
            Trusted by 500+ Clients <br /> in 6+ Countries
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1955A6",
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              px: 4,
              py: 1,
              mt: 2,
              "&:hover": {
                backgroundColor: "#19417f",
              },
            }}
          >
            Talk to Sales Team
          </Button>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{placeItems :"center"}}
        >
            <Box
            sx={{
                "& li::marker": {
                  color: "#606872",
                },
                display:"flex" ,
                flexDirection :"column",
                gap:2
              }}
              
            >
          {[
            "Precision Control",
            "Energy Efficient Motors",
            "Stainless Steel Build",
            "Easy Maintenance",
            "Spare Parts Available",
            "CE / ISO Compliance",
          ].map((item, index) => (
            <Typography key={index} component={"li"} sx={{ fontSize: "18px" }}>
              <span style={{ color: "#606872" }}>{item}</span>
            </Typography>
          ))}
          </Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
