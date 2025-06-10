import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton,
} from "@mui/material";
import ContactForm from "../ContactUs/ContactForm"; // adjust path if needed
import CloseIcon from '@mui/icons-material/Close'; 
import { useRouter } from 'next/router';

const CTASection = () => {
    const router = useRouter()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hide = true;
  const handleNavigate = ()=>{
          router.push(`/contact-us`)
        }
  return (
    <>
      
    <Box
      sx={{
        background: "linear-gradient(90deg, #0C4DA2, #167DFF)",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: 5,
        borderRadius: "8px",
        mx: { xs: 2, md: 8 },
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={7}>
          <Typography variant="h5" fontWeight={700} sx={{fontSize : {xs:"1.2rem" , md:"1.6rem"}, fontWeight: 'bold',}}>
            Need Help Choosing the Right Machine?
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Let us help you automate packaging the right way.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "flex-end",
            gap: 2,
            mt: isMobile ? 2 : 0,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#0C4DA2",
              fontWeight: "bold",
              fontSize : {xs:"12px" ,md: "14px"},
              "&:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
            onClick={handleOpen}
          >
            Talk To An Expert
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontSize : {xs:"12px" ,md: "14px"},
              borderColor: "#fff",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#0C4DA2",
              },
            }}
             onClick={handleNavigate}
          >
            Request A Free Quote
          </Button>
        </Grid>
      </Grid>
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

            width: { xs: "90%", sm: 500 },
            height:{xs:"90%", sm:"500"}
          }}
        >
            {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "#f0f0f0",
              "&:hover": { bgcolor: "#e0e0e0" },
              boxShadow: 1,
            }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
          <ContactForm onClose={handleClose} hide={hide} />
        </Box>
      </Modal>
    </>
  )
}
export default CTASection