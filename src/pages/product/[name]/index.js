// pages/product-details/[id].js
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import SeoHead from "@/components/SeoHead/SeoHead";
import { Box, CircularProgress } from "@mui/material";
import axiosInstance from "@/utils/axiosInstance";
import { parseSlug } from "@/utils/function";

const ProductDescriptionPage = ({ productDetails, products }) => {
  if (!productDetails || !products) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  console.log( productDetails, products )

  return (
    <>
      <SeoHead
        title={productDetails.metaTitle}
        description={productDetails.metaDescription}
        image={productDetails.images?.[0]?.url}
        url={`https://www.inhyma.com/product/${productDetails.name}`}
      />
      <ProductDescription details={productDetails} products={products} />
    </>
  );
};

export default ProductDescriptionPage;


export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const [productDetailsRes, productsRes] = await Promise.all([
      axiosInstance.get("/product", { params: { id } }),
      axiosInstance.get("/getProducts"),
    ]);

    return {
      props: {
        productDetails: productDetailsRes.data,
        products: productsRes.data,
      },
    };
  } catch (error) {
    console.error("SSR error fetching product details:", error);
    return {
      props: {
        productDetails: null,
        products: null,
      },
    };
  }
}
