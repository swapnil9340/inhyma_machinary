import ProductBanner from '@/components/Product/banner';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react'

const ProductCategoryPage = () => {
    const [loading , setLoading] = useState(false);
    const [allCategories, setAllCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const getAllCategory = async () => {
        try {
            setLoading(true);
            const [categoryRes, productRes] = await Promise.all([
                axiosInstance.get("/category"),
                axiosInstance.get("/getProducts")
            ]);
            setAllCategories(categoryRes?.data)
            setAllProducts(productRes?.data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllCategory();
    }, [])

    return (
        <ProductCategory allCategories={allCategories} allProducts={allProducts} loading={loading} />
    )
}

export default ProductCategoryPage;