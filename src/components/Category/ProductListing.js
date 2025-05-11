import { Grid, Typography, Container, Box } from "@mui/material";
import Image from "next/image";
import vacuumMachine from "../../../public/vacuumMachine.png"

export default function ProductListing() {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      {/* Section Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ color: "#5a6b7a", mb: 4 }}
      >
        Product Listing Grid
      </Typography>

      {/* Headers */}
      <Grid container spacing={0} mb={2} sx={{ background: "#2157a4", p: 1 }}>
        <Grid item size={{ xs: 12, md: 6 }} >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            VACUUM MACHINE
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }} sx={{display : {xs:'none' ,md:"block"}}} >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Specifications
          </Typography>
        </Grid>
      </Grid>

      {/* Content */}
      <Grid container spacing={4} sx={{ placeItems: "center" }}>
        {/* Left Side: Image + Description */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ placeItems: "center" }}>
          <Box mb={2}>
            <Image
              src={vacuumMachine}
              alt="Household Vacuum Sealer"
              width={300}
              height={200}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="h6" color="#2157a4" gutterBottom>
              Household Vacuum Sealer
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textWrap: "wrap",
                color: "#606872",
                fontSize: "12px",
                width: "300px",
              }}
            >
              Household vacuum sealer’s ability of vacuum exhausting is very
              well. It is applicable to the vacuum packaging of some kinds of
              plastic bags, and has the advantage of small size, simple
              component, easy operating. Food packed by this machine can extend
              its fresh protecting time. It protects the food in refrigerator
              from corrosion, water evaporation and split.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Specifications */}
        <Grid item container size={12} spacing={0}  sx={{ background: "#2157a4", p: 1 ,display:{md:"none"} }}>
        <Grid item size={{ xs: 12, md: 6 }} >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Specifications
          </Typography>
        </Grid>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }} sx={{ placeItems: "center" }}>
          <Box sx={{display:"flex" ,flexDirection:"column" , gap :"10px"}}>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Vacuum Capacity:</strong> 0.035 Mpa
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Width Of Sealing:</strong> 40-300mm
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Power Source:</strong> AC 220V/50-60Hz
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Sealing Time:</strong> Number Display, And Auto Control
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Weight:</strong> 2.5 Kg
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
