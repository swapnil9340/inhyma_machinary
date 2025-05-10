import MachineDemand from "./MachineDemand";
import MachinesInfoSection from "./MachinesInfoSection";
import ProductCategoryBanner from "./ProductCategoryBanner";
import SelectCategory from "./SelectCategory";


const ProductCategory = () => {
  return (
    <>
      <ProductCategoryBanner />
      <SelectCategory/>
      <MachineDemand/>
      <MachinesInfoSection/>
    </>
  );
};

export default ProductCategory;
