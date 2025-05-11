import { Grid, Typography, Container } from '@mui/material';

export default function IndustrialExcellence() {
  return (
    <Container  maxWidth="xl" sx={{ py: 5 }}>
      <Grid container spacing={3} justifyContent="center" textAlign="center">
        
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold"  sx={{ color: '#53657D' ,fontSize : {xs:"25px" ,md:"35px"} }}>
            Precision Vacuum Sealers Designed for Industrial Excellence
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" sx={{color : "#000000"}}>
            INHYMA Solutions LLP offers a comprehensive range of vacuum packaging machines engineered for both
            small-scale and large-scale operations. Our systems are ideal for food preservation, medical equipment,
            electronic components, and chemical packaging. Whether you are looking for tabletop models or
            double-chamber industrial-grade machines, we provide reliable solutions tailored to your production needs.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" sx={{color : "#000000"}}>
            Our machines are crafted to reduce oxygen exposure, enhance hygiene, and deliver extended shelf life,
            while adhering to strict international quality standards.
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}
