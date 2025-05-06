import React from "react";
import MachineBanner from "./banner";
import CategorySelector from "./CategorySelector";
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const productData = [
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    {
        title: 'Vacuum machine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: '/ïnhyma header image 1.png', // replace with real path
    },
    // Add more cards as needed
];
const Product = () => {
    return (
        <>
            <MachineBanner></MachineBanner>
            <CategorySelector></CategorySelector>
            <Container sx={{ py: 0.5 }}>
                <Typography variant="h5" fontWeight={600} mb={4} textAlign="center">
                    Featured Machines
                </Typography>
                <Container >
                    <Grid container spacing={2}>
                        {productData.map((product, idx) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                <ProductCard {...product} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default Product