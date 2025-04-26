import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
    return (
        <Box
            sx={{ display: "flex", justifyContent: "center", mt:10}}
        >
            <Grid
                container
                sx={{width :"90%"}}
                gap={4}
            >

                <Grid size={{xs:6}} >
                <Box
                    sx={{
                        backgroundImage: `url('/About_1.png')`,
                        backgroundRepeat: "no-repeat",
                        height: "285px",
                        width: "100%",
                    }}
                ></Box>
               </Grid>

               <Grid size={{xs:5}} >
                    <Typography
                        variant="h2"
                        sx={{ color: "#243E60", fontSize: "48px", marginBottom: "50px" }}
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