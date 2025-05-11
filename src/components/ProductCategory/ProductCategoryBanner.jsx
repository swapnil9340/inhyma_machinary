import MachineBanner from "@/CommonComponents/MachineBanner";
import machine1 from "../../../public/cat_3.png"
import machine2 from "../../../public/cat_4.png"

const bannerContent = {
  heading1: { subHeading1: "Vacuum Packaging Machines for Freshness,", subHeading2: "Hygiene & Longevity" },
  heading2: "Explore INHYMA’s advanced vacuum packaging solutions built to extend product shelf life, prevent contamination, and ensure airtight sealing  across food, pharma, chemical, and logistics industries.",
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
