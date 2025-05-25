import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, Box } from '@mui/material';
import { useRouter } from 'next/router';

export default function MachineDemand({ allProducts, loading }) {

    const router = useRouter()

    const handleNavigate = (item) => {
        router.push(`/product_description/${item._id}`)
    }

    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={3} justifyContent="center" sx={{ px: { md: 2 }, py: 4 }}>
                <Grid item size={{ xs: 12 }} >
                    <Typography variant="h5" align="center" fontWeight={600} sx={{ color: "#53657D", fontSize: { xs: "25px", md: "35px" } }}>
                        Popular Machines in Demand
                    </Typography>
                </Grid>

                <Grid container spacing={{ xs: 1, md: 3 }} size={{ xs: 12 }} >
                    {
                        !loading ? (
                            allProducts.length > 0 && allProducts.slice(0, 4).map((machine, idx) => (
                                <Grid item size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                                    <Card sx={{ height: '100%', overflow: "visible", textAlign: 'center', border: '1px solid #C9C9C9', background: "none", display: "flex", flexDirection: "column" }} elevation={0}>
                                        <CardMedia
                                            component="img"
                                            image={machine?.images?.[0].url}
                                            alt={machine?.images?.[0].alt}
                                            sx={{ height: { xs: 150, md: 200 }, objectFit: 'contain', p: 2 }}
                                        />
                                        <CardContent sx={{ paddingX: { xs: "8px" } }} >
                                            <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#606872", fontSize: "18px" }}>
                                                {machine?.name}
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
                                                    fontSize: "14px"
                                                }}
                                            >
                                                {machine?.description}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ flex: 1, placeSelf: "center", alignItems: "self-end", display: "flex" }}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    zIndex: 2,
                                                    m: 2,
                                                    position: "relative",
                                                    backgroundColor: '#2157a4',
                                                    '&:hover': { backgroundColor: '#1e4e93' },
                                                    borderRadius: 0,
                                                    top: { md: "35px" },
                                                    textTransform: "capitalize",
                                                    fontSize: "16px"
                                                }}
                                                onClick={() => handleNavigate(machine)}
                                            >
                                                View Product
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Box sx={{ width: "100%" }} >
                                <Typography sx={{ textAlign: "center" }}>
                                    Loading...
                                </Typography>
                            </Box>
                        )
                    }


                </Grid>
            </Grid>
        </Container>
    );
}
