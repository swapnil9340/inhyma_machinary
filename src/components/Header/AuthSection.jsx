import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const AuthSection = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
      <PersonOutlineIcon   sx={{   color:"#606872"}} />
      <Typography variant="body2" color="primary">
        Log In/Sign Up
      </Typography>
    </Box>
  );
};

export default AuthSection;
