import { useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContactForm from "../ContactUs/ContactForm"; // adjust path if needed

const AuthSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
        <IconButton onClick={handleOpen}>
          <PersonOutlineIcon sx={{ color: "#606872" }} />
        </IconButton>
        {/* <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }} onClick={handleOpen}>
          Log In / Sign Up
        </Typography> */}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: { xs: "90%", sm: 800 },
          }}
        >
          <ContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default AuthSection;
