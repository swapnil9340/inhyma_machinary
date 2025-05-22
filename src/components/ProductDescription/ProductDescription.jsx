import React from 'react'
import ProductDescriptionBanner from './ProductDescriptionBanner'
import ListingGrid from './ListingGrid'
import IndustrialExcellence from './IndustrialExcellence'
import SimilerProducts from './SimilerProducts'

const ProductDescription = ({details}) => {



  return (
    <>
      <ProductDescriptionBanner details={details}/>
      <ListingGrid/>
      <IndustrialExcellence/>
      <SimilerProducts/>
      </>
  )
}

export default ProductDescription