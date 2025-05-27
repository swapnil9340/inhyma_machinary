import { Box, Typography, Card, CardContent, Grid, CardMedia, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import ScrollBarCard from "../ScrollbarCard"
import Image from "next/image";


// const allProducts = {
//     vacuum: [
//         { name: "Vacuum Sealer A", img: "image 13.png" },
//         { name: "Vacuum Sealer B", img: "/product2.png" },
//     ],
//     sealing: [
//         { name: "Sealing Machine A", img: "image 13.png" },
//         { name: "Sealing Machine B", img: "/product2.png" },
//     ],
//     induction: [
//         { name: "Portable Induction Sealer", img: "image 13.png" },
//         { name: "Continuous Induction Sealer", img: "/product2.png" },
//         { name: "Portable Induction Sealer", img: "image 13.png" },
//         { name: "Portable Induction Sealer", img: "image 13.png" },
//     ],
// };

const ProductCategoriesSection = ({ allProducts, allCategories}) => {
    const [selected, setSelected] = useState([]);
    const [products , setProducts] = useState([]);



    const filterProducts = ()=>{
         const result =  allProducts.filter((product)=>product?.category === selected?.name )
         setProducts(result)
    }

    useEffect(()=>{
        setSelected(allCategories[0])
        filterProducts();
  },[JSON.stringify(allCategories)])



  useEffect(()=>{
        filterProducts();
  } , [JSON.stringify(selected)])
  console.log("filters" , products)


  console.log("selected" ,selected)
    // const products = allProducts[selected];

    return (
        <Box sx={{ backgroundColor: "#E7F4FF", py: 5 }}>
             <Container maxWidth="xl">
            <ScrollBarCard selected={selected} setSelected={setSelected} categories={allCategories}></ScrollBarCard>
           
            <Grid container spacing={2} justifyContent="flex-start">
                {products.map((product, i) => (
                    <Grid item size={{xs:6 ,md : 2}} key={i}>
                        <Card
                            sx={{
                                maxWidth: 250,
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                padding: 1,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'space-between',
                                justifyItems:"baseline",
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ paddingBottom: '16px !important' ,justifyItems:"baseline" }}>
                                <Typography variant="subtitle1" fontWeight={500} mb={2} sx={{width:"150px" , fontSize:{xs:"18px" ,md:"16px"} ,lineHeight:"17px" ,  textAlign:"left" ,color :"#606872"}}>
                                    {product?.name}
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1955A6',
                                        color: '#fff',
                                        fontSize: '0.75rem',
                                        padding: '6px 12px',
                                        textTransform: 'none',
                                        borderRadius :0,
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
                                        src={product?.images?.[0]?.url} // 👈 Replace with your actual image
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
            </Container>
        </Box>
    );
};

export default ProductCategoriesSection;
