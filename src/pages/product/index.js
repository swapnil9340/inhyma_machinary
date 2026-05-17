// pages/product-category.js or pages/product-category/index.js

import ProductCategory from "@/components/ProductCategory/ProductCategory";
import SeoHead from "@/components/SeoHead/SeoHead";
import { getAllCategories, getAllProducts } from "@/lib/data";
import React, { useState } from "react";

const ProductCategoryPage = ({ allCategories, allProducts }) => {
  const [loading, setLoading] = useState(false);
  const [filteredCards, setFilteredCards] = useState(allProducts);
  return (
    <>
      <SeoHead
        title="Our Products | Inhyma – Smart, Innovative, Scalable"
        description="Discover Inhyma’s range of innovative and tech-driven products tailored to transform your business and enhance productivity."
        keywords="Inhyma products, smart tech products, tech solutions, digital innovation"
        url={"https://www.inhyma.com/product"}
      />
      <ProductCategory
        allCategories={allCategories}
        allProducts={allProducts}
        loading={loading}
        setloading={setLoading}
        filteredCards={filteredCards}
        setFilteredCards={setFilteredCards}
      />
    </>
  );
};

export default ProductCategoryPage;

// Static data fetch at build time
export async function getStaticProps() {
  try {
    const [allCategories, allProducts] = await Promise.all([
      getAllCategories(),
      getAllProducts(),
    ]);

    return {
      props: {
        allCategories: allCategories || [],
        allProducts: allProducts || [],
      },
      revalidate: 60,
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
