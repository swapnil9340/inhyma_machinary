import { Grid, Typography, Container, Box } from "@mui/material";
import Image from "next/image";
import vacuumMachine from "../../../public/vacuumMachine.png"

export default function ListingGrid({details}) {
  return (
     <Container maxWidth="xl" sx={{ py: 5 }}>
          {/* Section Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#5a6b7a", mb: 4 ,fontSize : {xs:"25px" ,md:"35px"} }}
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
              <Box mb={2} sx={{ width:"50%" , height:"100%" }}>
                <Image
                  src={details.images[0].url}
                  alt="Household Vacuum Sealer"
                  width={100}
                  height={100}
                  quality={100}
                  style={{ width: "100%", height: "100%" }}
                />
                {/* <Typography variant="h6" color="#2157a4" gutterBottom>
                 {details.name }
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
                 {details.description}
                </Typography> */}
              </Box>
            </Grid>
    
            {/* Right Side: Specifications */}
            {/* <Grid item container size={12} spacing={0}  sx={{ background: "#2157a4", p: 1 ,display:{md:"none"} }}>
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
            </Grid> */}
    
            <Grid item size={{ xs: 12, md: 6 }} sx={{ placeItems: "center" }}>
              <Box sx={{display:"flex" ,flexDirection:"column" , gap :"10px"}}>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  {details.specification}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
  );
}
