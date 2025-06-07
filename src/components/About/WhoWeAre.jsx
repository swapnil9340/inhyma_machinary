import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", mt:{xs:5,md:10}}}
        >
            <Grid
                container
                sx={{width :"90%"}}
                gap={4}
            >

                <Grid size={{xs:12 ,md:6}} >
                <Typography
                        variant="h2"
                        sx={{ color: "#243E60", fontSize: "2px", marginBottom: "10px" ,textAlign :"center" ,display :{xs:"block" ,md:"none"} }}
                    >
                        Who We Are
                    </Typography>
                <Box
                    sx={{
                        backgroundImage: `url('/About_1.png')`,
                        backgroundRepeat: "no-repeat",
                        height: {xs:"185px" ,md:"285px"},
                        width: "100%",
                        backgroundSize :"cover"
                    }}
                ></Box>
               </Grid>

               <Grid size={{xs:12 ,md:5}} >
                    <Typography
                        variant="h2"
                        sx={{ color: "#243E60", fontSize: "25px", marginBottom: "20px" ,display :{xs:"none" ,md:"block"} }}
                    >
                        Who We Are
                    </Typography>
                    <Typography sx={{ color: "#606872", marginBottom: "2vmin" }}>
                        INHYMA Solutions LLP, formerly known as Darsh Enterprise, is a
                        trusted name in the field of packaging machines, material handling
                        equipment, and automation systems. With a legacy of over 13 years,
                        we have grown from a local supplier into a global solutions
                        provider with a presence in India, China, Hong Kong, Kenya,
                        Uganda, and Rwanda.
                    </Typography>
                    <Typography sx={{ color: "#606872" }}>
                        We are committed to engineering cost-effective, high-efficiency,
                        and customized machinery that helps businesses improve
                        productivity, reduce downtime, and embrace automation.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WhoWeAre