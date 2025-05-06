import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import rightArrow from "../../../public/rightArrow.svg"

const Banner = () => {
    return (
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
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"10vmin",md:"7vmin"}}}>
                            Innovate<span style={{color:"red"}}>.</span>
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"10vmin",md:"7vmin"}}}>
                            Automate<span style={{color:"red"}}>.</span>
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#243E60" ,fontSize : {xs:"10vmin",md:"7vmin"}}}>
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

                        <Typography variant="p" sx={{  color:"#53657D" ,fontSize : {xs:"3.5vmin" ,md:"2.5vmin"} , margin :"10px 0px"}} >
                        India’s Trusted Provider of Packaging Machinery and
                        Material Handling Equipment for Over 13 Years.
                        </Typography>
                        <Box 
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
    );
};

export default Banner;
