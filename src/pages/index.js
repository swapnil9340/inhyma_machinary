// pages/index.js (or /pages/home.js)

import axiosInstance from "@/utils/axiosInstance";
import Banner from "../components/Home/banner";
import Content from "../components/Home/content";
import CTASection from "../components/Home/ctasection";
import GlobalPresenceSection from "../components/Home/GlobalPresenceSection";
import IndustriesServed from "../components/Home/IndustriesServed";
import WhyTrustSection from "../components/Home/infoacard";
import ProductCard from "../components/Home/ProductCard";
import ProductCategories from "../components/Home/productCategory";
import TestimonialCard from "../components/Home/TestimonialCard";
import SeoHead from "@/components/SeoHead/SeoHead";

const Home = ({ allCategories, allProducts }) => {
  const loading = false; 
  return (
    <>
    <SeoHead></SeoHead>
      <Banner />
      <Content />
      <ProductCategories
        loading={loading}
        allProducts={allProducts}
        allCategories={allCategories}
      />
      <WhyTrustSection />
      <ProductCard loading={loading} allProducts={allProducts} />
      <IndustriesServed />
      <GlobalPresenceSection />
      <TestimonialCard loading={loading} />
      <CTASection />
    </>
  );
};

export default Home;

// Static Generation at build time
export async function getStaticProps() {
  try {
    const [categoryRes, productRes] = await Promise.all([
      axiosInstance.get("/category"),
      axiosInstance.get("/getProducts"),
    ]);

    return {
      props: {
        allCategories: categoryRes?.data || [],
        allProducts: productRes?.data || [],
      },
      revalidate: 60, // Rebuild the page in background every 60 seconds (optional)
    };
  } catch (error) {
    console.error("Static generation fetch error:", error);
    return {
      props: {
        allCategories: [],
        allProducts: [],
      },
    };
  }
}
