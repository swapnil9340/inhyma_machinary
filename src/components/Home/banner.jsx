import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Modal, IconButton } from '@mui/material';
import Image from 'next/image';
import rightArrow from "../../../public/rightArrow.svg"
import { useRouter } from 'next/router';
import ContactForm from "../ContactUs/ContactForm"; // adjust path if needed
import CloseIcon from '@mui/icons-material/Close'; 
const Banner = () => {
    const router = useRouter()
     const [open, setOpen] = useState(false);
    
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const hide = true;
    
      const handleNavigate = ()=>{
          router.push(`/product`)
        }
        
    return (
        <>
         
        <Box
            sx={{
                // height: "300px",
                // backgroundColor: '#f5f5f5', // Agar background image chaho to yahan change karna
                backgroundImage: `url('/Rectangle 8.png')`, // 👈 optional pura banner ka bg image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: 5,
                px: 2,
                paddingTop:"20px"
            }}
        >
            <Grid container spacing={2} alignItems="center" >

                {/* Left Side: Content */}
                <Grid item size={{xs:12 ,md:6}} sx={{order : {xs:2 , md:1}}}>
                    <Box sx={{ display:"grid", textAlign: { xs: 'center', md: 'left' } ,marginLeft:{md:"100px"} }}>
                        <Box sx={{display :"flex" ,alignItems :"center" ,justifyContent :'space-between'}}>
                          <Box textAlign={'left'}>
                        <Typography variant="h1" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"36px",md:"48px"}}}>
                            Innovate<span style={{color:"red"}}>.</span>
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"36px",md:"48px"}}}>
                            Automate<span style={{color:"red"}}>.</span>
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"36px",md:"48px"}}}>
                            Elevate<span style={{color:"red"}}>.</span> 
                        </Typography>
                        </Box>
                        <Box sx={{ height: 'auto', textAlign: 'center' ,display:{md:"none"} }}>
                            <Image
                                src="/ïnhyma header image 1.png"    // (filename normal kar lena)
                                alt="Inhyma header image"
                                width={350}
                                height={350}
                                style={{
                                    objectFit: 'contain',
                                    width: '50%',      // responsive width
                                    height: 'auto',     // maintain aspect ratio
                                    display: 'block',
                                    marginLeft :"30%"   // <-- yeh important
                                }}
                            />
                        </Box>
                        </Box>

                        <Typography variant="p" sx={{  color:"#53657D" ,fontSize : {xs:"14px" ,md:"18px"} , margin :"10px 0px"}} >
                        India’s Trusted Provider of Packaging Machinery and
                        Material Handling Equipment for Over 13 Years.
                        </Typography>
                        {/* <Box 
                        sx={{
                            display:"flex",
                            gap:{xs:"1px" ,md:"14px"},
                            justifyContent :{xs:"center" ,md:"left"}
                        }}
                        >
                        <Button
                            variant="contained"
                            color="primary"
                            
                            
                            sx={{
                                bgcolor: "#1955A6",
                                borderRadius : "0px",
                                fontSize :"18px",
                                scale : {xs:"0.8" ,md:"1"},
                                textTransform : "none",
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            }}
                            onClick={handleNavigate}
                        >
                            Explore Product
                        </Button>
                        <Button

                            variant="contained"
                            color="primary"
                            endIcon={<Image src={rightArrow} />}
                            
                            sx={{
                                bgcolor: '#fff',
                                color :"#1955A6",
                                fontSize :"18px",
                                borderRadius : "0px",
                                scale : {xs:"0.8" ,md:"1"},
                                border : "2px solid #1955A6",
                                textTransform :"none",
                                '&:hover': {
                                    bgcolor: "#fcfcfc",
                                },
                            }}
                        >
                            Request a Quote
                        </Button>
                        </Box> */}
                        <Box
  sx={{
    display: "flex",
    gap: { xs: 1, md: 2 },
    justifyContent: { xs: "center", md: "flex-start" },
    mt: 2,
  }}
>
  {/* Explore Product Button */}
  <Button
    variant="contained"
    color="primary"
    sx={{
      bgcolor: "#1955A6",
      borderRadius: 0,
      fontSize: "18px",
      scale: { xs: "0.8", md: "1" },
      textTransform: "none",
      boxShadow: "none",
      '&:hover': {
        bgcolor: 'primary.dark',
      },
      minWidth: 160,
      py: 1.2,
    }}
    onClick={handleNavigate}
  >
    Explore Product
  </Button>

  {/* Request a Quote Button */}
  <Button
    variant="contained"
    color="primary"
    endIcon={
      <Image
        src={rightArrow}
        alt="arrow"
        width={24}
        height={24}
        style={{ marginLeft: 4 }}
      />
    }
    sx={{
      bgcolor: '#fff',
      color: "#1955A6",
      fontSize: "18px",
      borderRadius: 0,
      scale: { xs: "0.8", md: "1" },
      border: "2px solid #1955A6",
      textTransform: "none",
      boxShadow: "none",
      minWidth: 180,
      py: 1.2,
      '&:hover': {
        bgcolor: "#fcfcfc",
      },
    }}
           onClick={handleOpen}
  >
    Request a Quote
  </Button>
</Box>
                    </Box>
                   
                </Grid>



                {/* Left side */}
                <Grid item size={6}  sx={{order : {xs:1 , md:2}}}>
                    <Box
                        sx={{
                            display: {xs:"none" , md:'flex'},
                            justifyContent: 'center', // center horizontally
                            alignItems: 'center',     // center vertically
                            height: '100%',
                        }}
                    >
                        <Box sx={{ width: '80%', height: 'auto', textAlign: 'center' }}>
                            <Image
                                src="/ïnhyma header image 1.png"    // (filename normal kar lena)
                                alt="Inhyma header image"
                                width={350}
                                height={350}
                                style={{
                                    objectFit: 'contain',
                                    width: '50%',      // responsive width
                                    height: 'auto',     // maintain aspect ratio
                                    display: 'block',   // <-- yeh important
                                    margin: '0 auto',   // <-- center
                                }}
                            />
                        </Box>
                    </Box>
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
    );
};

export default Banner;
