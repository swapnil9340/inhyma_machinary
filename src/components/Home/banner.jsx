import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';

const Banner = () => {
    return (
        <Box
            sx={{
                height: "300px",
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
            <Grid container spacing={2} alignItems="center">

                {/* Left Side: Content */}
                <Grid item size={6}>
                    <Box sx={{ display:"grid", textAlign: { xs: 'center', md: 'left'  ,marginLeft:"100px" , marginBottom:"75px"} }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#53657D"}}>
                            Innovate<span style={{color:"red"}}>.</span>
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#53657D"}}>
                            Automate<span style={{color:"red"}}>.</span>
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold', color:"#53657D"}}>
                            Elevate<span style={{color:"red"}}>.</span> 
                        </Typography>
                        <Typography variant="p" sx={{  color:"#53657D"}} >
                        India’s Trusted Provider of Packaging Machinery and
                        Material Handling Equipment for Over 13 Years.
                        </Typography>
                        <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            }}
                        >
                            Shop Now
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            }}
                        >
                            Shop Now
                        </Button>
                        </Box>
                    </Box>
                </Grid>



                {/* Left side */}
                <Grid item size={6}>
                    <Box
                        sx={{
                            display: 'flex',
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
