import { Box, Typography } from "@mui/material";

const AddressBar = () => {
  return (
    <Box sx={{  color:"#606872", padding: '5px 20px', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'  , fontFamily:"Inter"}}>
      <Typography variant="body2">
      Office No.421, 4th Floor, Lodha Supremus -II, Wagle Road No.22,  Next to New Passport Office, Wagle Estate, Thane West – 400604
      </Typography>
      <Typography variant="body2" sx={{ display: 'flex',   fontSize: '14px' ,alignItems: 'center' , fontFamily:"Inter" }}>
        📞 022-48017688, 8355896311
      </Typography>
    </Box>
  );
};

export default AddressBar;
