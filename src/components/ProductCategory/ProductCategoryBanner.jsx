import MachineBanner from "@/CommonComponents/MachineBanner";
import machine1 from "../../../public/cat_3.png"
import machine2 from "../../../public/cat_4.png"

const bannerContent = {
  heading1: { subHeading1: "Power Up Your Packaging Line with INHYMA’s Smart Machines", subHeading2: "Hygiene & Longevity" },
  heading2: "From sealing to wrapping, strapping to labeling—INHYMA brings you cutting-edge packaging solutions built for speed, precision, and performance. Explore our wide range of machines tailored for food, pharma, chemical, and logistics industries, and find the perfect fit to elevate your production efficiency.",
  img1: machine1,
  img2: machine2
  
}


const ProductCategoryBanner = () => {
  return (
    <>
      <MachineBanner bannerContent={bannerContent} />
    </>
  );
};

export default ProductCategoryBanner;
