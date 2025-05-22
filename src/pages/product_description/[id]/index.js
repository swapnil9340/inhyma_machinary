import ProductDescription from '@/components/ProductDescription/ProductDescription'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '@/utils/axiosInstance'

const ProductDescriptionPage = () => {
  const [productDetails , setProductDetails] = useState(null)
   const {query} = useRouter()
   
   const {id} = query;
   console.log("id" ,id)


   const getProductDetail = async()=>{
    try{
      const res = await axiosInstance.get("/product" ,{params : {id}})
      console.log("res" ,res)
      setProductDetails(res.data)
    }catch{(error)=>{
          console.log("error in product detail")
    }}
       
   }


   useEffect(()=>{
    if(id){
      getProductDetail()
    }
   } , [id])
   

  return (
    <ProductDescription details={productDetails}/>
  )
}

export default ProductDescriptionPage