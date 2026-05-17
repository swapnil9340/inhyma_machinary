// pages/product-details/[id].js
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import SeoHead from "@/components/SeoHead/SeoHead";
import { Box, CircularProgress } from "@mui/material";
import { getAllProducts, getProductByName } from "@/lib/data";

const ProductDescriptionPage = ({ productDetails, products }) => {
  if (!productDetails || !products) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
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
  const { name } = context.params;

  try {
    const [productDetails, products] = await Promise.all([
      getProductByName(decodeURIComponent(name)),
      getAllProducts(),
    ]);

    if (!productDetails) {
      return { notFound: true };
    }

    return {
      props: {
        productDetails,
        products: products || [],
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
