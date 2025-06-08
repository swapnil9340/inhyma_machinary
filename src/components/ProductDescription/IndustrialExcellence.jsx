import { Grid, Typography, Container } from '@mui/material';

export default function IndustrialExcellence({details}) {
  return (
    <Container  maxWidth="xl" sx={{ py: 5 }}>
      <Grid container spacing={3} justifyContent="center" textAlign="center" display={'grid'}>
        
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold"  sx={{ color: '#53657D' ,fontSize : {xs:"25px" ,md:"35px"} }}>
            {details.metaTitle}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" sx={{color : "#000000"}}>
           {details.description}
          </Typography>
        </Grid>

        {/* <Grid item xs={12}>
          <Typography variant="body1" sx={{color : "#000000"}}>
              {details.metaDescription}
          </Typography>
        </Grid> */}

      </Grid>
    </Container>
  );
}
