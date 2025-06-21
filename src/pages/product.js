// pages/product-category.js or pages/product-category/index.js

import ProductCategory from '@/components/ProductCategory/ProductCategory';
import SeoHead from '@/components/SeoHead/SeoHead';
import axiosInstance from '@/utils/axiosInstance';
import React from 'react';

const ProductCategoryPage = ({ allCategories, allProducts }) => {
    console.log( allCategories, allProducts , "Ddddddddddddddddddddddddddddddd" )
  return (
<>
<SeoHead
  title="Our Products | Inhyma – Smart, Innovative, Scalable"
  description="Discover Inhyma’s range of innovative and tech-driven products tailored to transform your business and enhance productivity."
  keywords="Inhyma products, smart tech products, tech solutions, digital innovation"
/>
    <ProductCategory
      allCategories={allCategories}
      allProducts={allProducts}
      loading={false}
      filteredCards={allProducts}
      setFilteredCards={() => {}}
    />
</>
  );
};

export default ProductCategoryPage;

// Static data fetch at build time
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
      revalidate: 60, // Optional: re-generate the page every 60 seconds
    };
  } catch (error) {
    console.error("Static props fetch error:", error);
    return {
      props: {
        allCategories: [],
        allProducts: [],
      },
    };
  }
}
