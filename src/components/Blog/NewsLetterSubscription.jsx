import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'next/image';

export default function NewsletterSubscription() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 , bgcolor : "#fff"}}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' , justifyContent : "center",gap:2 }}>
        <Box sx={{position :"relative" ,height:{xs:"6vmin" ,md:"4vmin"} ,width :{xs:"6vmin" ,md:"4vmin"}}}>
          <Image src="/mailIcon.svg" layout='fill'/>
        </Box>
          <Typography variant="h6" fontWeight={600} color="#5c6672" sx={{fontSize :{xs:"6vmin" ,md:"4vmin"}}}>
            Subscribe to Newsletter
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
            mt: { xs: 2, md: 0 },
          }}
        >
         <Box
              component={"input"}
              className="form-control"
              placeholder="Name"
              sx={{
                fontFamily :"sans-serif",
                background :"#eee",
                paddingLeft :"10px",
                height : {xs:"10vmin" , md:"4vmin"},
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
           <Box
              component={"input"}
              className="form-control"
              placeholder="Email"
              sx={{
                fontFamily :"sans-serif",
                background :"#eee",
                height : {xs:"10vmin" , md:"4vmin"},
                paddingLeft :"10px",
                ":hover": {
                  borderColor: "#000",
                },
                ":focus": {
                  borderColor: "#1976d2",
                  boxShadow: "none",
                  borderWidth: "2px",
                },
              }}
            />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2157a4',
              whiteSpace: 'nowrap',
              height : {xs:"10vmin" , md:"4vmin"},
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
