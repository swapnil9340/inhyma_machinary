// pages/index.js (or /pages/home.js)

import axiosInstance from "@/utils/axiosInstance";
import Banner from "./banner";
import Content from "./content";
import CTASection from "./ctasection";
import GlobalPresenceSection from "./GlobalPresenceSection";
import IndustriesServed from "./IndustriesServed";
import WhyTrustSection from "./infoacard";
import ProductCard from "./ProductCard";
import ProductCategories from "./productCategory";
import TestimonialCard from "./TestimonialCard";

const Home = ({ allCategories, allProducts }) => {
  const loading = false; // Data is available at build time

  return (
    <>
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
