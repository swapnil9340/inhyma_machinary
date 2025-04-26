import { Box, Typography, Card, CardContent, Grid, CardMedia, Button } from "@mui/material";
import { useState } from "react";
import ScrollBarCard from "../ScrollbarCard"
import Image from "next/image";


const allProducts = {
    vacuum: [
        { name: "Vacuum Sealer A", img: "image 13.png" },
        { name: "Vacuum Sealer B", img: "/product2.png" },
    ],
    sealing: [
        { name: "Sealing Machine A", img: "image 13.png" },
        { name: "Sealing Machine B", img: "/product2.png" },
    ],
    induction: [
        { name: "Portable Induction Sealer", img: "image 13.png" },
        { name: "Continuous Induction Sealer", img: "/product2.png" },
        { name: "Portable Induction Sealer", img: "image 13.png" },
    ],
};

const ProductCategoriesSection = () => {
    const [selected, setSelected] = useState("induction");

    const products = allProducts[selected];

    return (
        <Box sx={{ backgroundColor: "#E7F4FF", py: 5 }}>
            <ScrollBarCard></ScrollBarCard>
            <Grid container spacing={2} justifyContent="center">
                {products.map((product, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <Card
                            sx={{
                                maxWidth: 250,
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                padding: 2,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'space-between',
                                justifyItems:"baseline",
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ paddingBottom: '16px !important' ,justifyItems:"baseline" }}>
                                <Typography variant="subtitle1" fontWeight={500} mb={2} style={{width:"150px" , fontSize:"14px" ,lineHeight:"17px" ,  textAlign:"left"}}>
                                    Portable Induction Sealer Portable Induction Sealer
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#0d47a1',
                                        color: '#fff',
                                        fontSize: '0.75rem',
                                        padding: '6px 12px',
                                        textTransform: 'none',
                                        mb: 2,
                                        '&:hover': {
                                            backgroundColor: '#08306b',
                                        },
                                    }}
                                >
                                    View Product
                                </Button>

                            </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'center',
                                        
                                    }}
                                >
                                    <Image
                                        src="/image 13.png" // 👈 Replace with your actual image
                                        alt="Portable Induction Sealer"
                                        width={100}
                                        height={100}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductCategoriesSection;
