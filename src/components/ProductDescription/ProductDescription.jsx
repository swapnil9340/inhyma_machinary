import React from 'react'
import ProductDescriptionBanner from './ProductDescriptionBanner'
import ListingGrid from './ListingGrid'
import IndustrialExcellence from './IndustrialExcellence'
import SimilerProducts from './SimilerProducts'

const ProductDescription = ({details ,products}) => {

   const randomFour = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);


  return (
    <>
      <ProductDescriptionBanner details={details}/>
      <ListingGrid/>
      <IndustrialExcellence/>
      <SimilerProducts productsData={randomFour}/>
      </>
  )
}

export default ProductDescription