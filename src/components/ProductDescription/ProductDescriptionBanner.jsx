import MachineBanner from '@/CommonComponents/MachineBanner'
import React from 'react'

import machine1 from "../../../public/pd1.png"
import machine2 from "../../../public/pd2.png"



const ProductDescriptionBanner = ({details}) => {

  console.log("========>" ,details)

  const bannerContent = {
    heading1 : { subHeading1 : details?.name ,subHeading2 : "Hygiene & Longevity"},
    heading2 : "Explore INHYMA’s advanced vacuum packaging solutions built to extend product shelf life, prevent contamination, and ensure airtight sealing  across food, pharma, chemical, and logistics industries.",
    img1: details?.images?.[0]?.url ,
    img2 : details?.images?.[0]?.url
  }
  
  return (
    <MachineBanner bannerContent={bannerContent}/>
  )
}

export default ProductDescriptionBanner