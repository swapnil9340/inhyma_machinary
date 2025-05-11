import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, Box } from '@mui/material';

const machines = [
    {
        title: 'Scissor Lift',
        description:
            'The Scissor Lift is a versatile and reliable lifting solution designed for safe elevation of personnel and materials in industrial, construction, and warehouse applications.',
        image: '/ïnhyma header image 1.png',
    },
    {
        title: 'Mobile Floore Crane',
        description:
            'The Mobile Floor Crane is a versatile and heavy-duty lifting solution designed for material handling, loading, & unloading operations in warehouses, workshops, factories...',
        image: '/ïnhyma header image 1.png',
    },
    {
        title: 'Semi Automatic Capping Machine',
        description:
            'A high-precision and efficient solution for sealing bottles and containers with screw caps. Designed for small to medium-scale production.',
        image: '/ïnhyma header image 1.png',
    },
    {
        title: 'Automatic Strapping Machine',
        description:
            'A high-speed, fully automatic solution designed for securing cartons, packages and bundles efficiently using PP strapping.',
        image: '/ïnhyma header image 1.png',
    },
];

export default function SimilerProducts() {
    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={3} justifyContent="center" sx={{ px: {md:2}, py: 4 }}>
                <Grid item size={{ xs: 12 }} >
                    <Typography variant="h5" align="center" fontWeight={600} sx={{ color: "#53657D" , fontSize : {xs:"25px" ,md:"35px"} }}>
                        Similer Products
                    </Typography>
                </Grid>
                
                <Grid  container spacing={{xs:1 ,md:3}} size={{xs:12}} >
                {machines.map((machine, idx) => (   
                    <Grid item size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                        <Card sx={{ height: '100%',overflow : "visible" , textAlign: 'center', border: '1px solid #C9C9C9', background: "none" , display:"flex" ,flexDirection :"column"}} elevation={0}>
                            <CardMedia
                                component="img"
                                image={machine.image}
                                alt={machine.title}
                                sx={{ height: {xs:150 , md:200}, objectFit: 'contain', p: 2 }}
                            />
                            <CardContent sx={{paddingX:{xs:"8px"}}} >
                                <Typography variant="subtitle1" fontWeight={600} sx={{color : "#606872" , fontSize : "18px"}}>
                                    {machine.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mt: 1,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 4,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontSize : "14px"
                                    }}
                                >
                                    {machine.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{flex :1 , placeSelf :"center" ,alignItems : "self-end" ,display :"flex"}}>
                            <Button
                                variant="contained"
                                sx={{
                                    zIndex : 2,
                                    m: 2,
                                    position : "relative",
                                    backgroundColor: '#2157a4',
                                    '&:hover': { backgroundColor: '#1e4e93' },
                                    borderRadius : 0 ,
                                    top : {md:"35px"},
                                    textTransform :"capitalize",
                                    fontSize : "16px"
                                }}
                            >
                                View Product
                            </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Container>
    );
}
