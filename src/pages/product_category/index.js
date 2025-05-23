import ProductBanner from '@/components/Product/banner';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'

const ProductCategoryPage = () => {

 
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getAllCategory = async () => {
      try {
          const [categoryRes, productRes] = await Promise.all([
              axiosInstance.get("/category"),
              axiosInstance.get("/getProducts") // <- change this to your actual second API
          ]);
          setAllCategories(categoryRes?.data)
          setAllProducts(productRes?.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getAllCategory();
  }, [])

  return (
     <ProductCategory allCategories={allCategories} allProducts={allProducts}/>
  )
}

export default ProductCategoryPage;