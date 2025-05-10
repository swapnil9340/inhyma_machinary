import { Grid, Typography, Button, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const MachinesInfoSection = () => {
  const features = [
    'Quality-Assured EquipmentQuality-Assured ',
    'Pan-India Warehousing',
    'Custom-Built Options',
    'Export-Ready Models',
    'After-Sales Support & Spares',
  ];

  return (
    <Container disableGutters={{xs:true , md:false}} maxWidth={"xl"} sx={{ backgroundColor: '#EBF4FF', mt: 8, mb: 8, py: 6, px: {md:3}, display: "flex", justifyContent: "center" }}>

      <Box sx={{ width: "80%" }}>
        <Grid container spacing={4} alignItems="center" justifyContent={"space-between"}>
          <Grid item sx={{ xs: 12, md: 6 }} >
            <Typography variant="h5" fontWeight={600} gutterBottom sx={{ fontSize : {xs:"25px" ,md:"35px"}, color: "#53657D" }}>
              Popular Machines <br/> in Demand
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: {md:2},
                backgroundColor: '#2157a4',
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: '#1a4687',
                },
              }}
            >
              Contact Our Sales Team
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
          <List>
            {features.map((feature, index) => (
              <ListItem key={index} disableGutters sx={{alignItems:"baseline"}}>
                <CircleIcon sx={{fontSize : "10px" , marginRight : "10px" ,color:"#606872"}}/>
                <ListItemText
                 primary={<Typography sx={{fontSize :{xs:"16px" ,md:"20px" ,color : "#606872" ,fontWeight :"500"}}}>{feature}</Typography>}
                />
              </ListItem>
            ))}
          </List>
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
}

export default MachinesInfoSection;
