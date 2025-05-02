import CommonBanner from "@/CommonComponents/CommonBanner";


const bannerContent = {
  heading1 : "Vacuum Packaging Machines for Freshness, Hygiene & Longevity",
  heading2 : "Explore INHYMA’s advanced vacuum packaging solutions built to extend product shelf life, prevent contamination, and ensure airtight sealing across food, pharma, chemical, and logistics industries."
}

const CategoryBanner = () => {
  return (
     <CommonBanner bannerContent={bannerContent}/>
  );
};

export default CategoryBanner;
