import ProductDescription from "@/components/ProductDescription/ProductDescription";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import { Box } from "@mui/material";
import SeoHead from "@/components/SeoHead/SeoHead";

const ProductDescriptionPage = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();

  const { id } = query;
  console.log("id", id);

  const getProductDetail = async () => {
    try {
      setLoading(true);
      const [productDetails, products] = await Promise.all([
        axiosInstance.get("/product", { params: { id } }),
        axiosInstance.get("/getProducts"),
      ]);
      setProductDetails(productDetails.data);
      setProducts(products.data);
    } catch {
      (error) => {
        console.log("error in product detail");
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProductDetail();
    }
  }, [id]);

  if (loading) {
    return <Box>Loading...</Box>;
  }
  //   title, description, image, url

  return (
    <>
      <SeoHead
        title={productDetails.metaTitle}
        description={productDetails.metaDescription}
        image={productDetails.images[0].url}
        url={'https://inhyma-machinary-git-master-swapnil9340s-projects.vercel.app/product-details/'+`${productDetails._id}`}
      ></SeoHead>
      <ProductDescription details={productDetails} products={products} />
    </>
  );
};

export default ProductDescriptionPage;
