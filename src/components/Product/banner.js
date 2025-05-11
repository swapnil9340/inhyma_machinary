import MachineBanner from '@/CommonComponents/MachineBanner';
import machine1 from "../../../public/product1.png"
import machine2 from "../../../public/product2.png"

const bannerContent = {
  heading1 : { subHeading1 : "Explore Our Full Range of Packaging &" ,subHeading2 : "Material Handling Machines"},
  heading2 : "Browse through 150+ machines across 13 categories—from vacuum sealers to labeling systems. Trusted solutions for automation, efficiency, and precision.",
  img1: machine1 ,
  img2 : machine2
}



const ProductBanner = () => {
  return (

    <MachineBanner 
      bannerContent={bannerContent}
    />
  );
};

export default ProductBanner;
