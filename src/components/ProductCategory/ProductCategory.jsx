import MachineDemand from "./MachineDemand";
import MachinesInfoSection from "./MachinesInfoSection";
import ProductCategoryBanner from "./ProductCategoryBanner";
import SelectCategory from "./SelectCategory";


const ProductCategory = ({allCategories ,allProducts}) => { 
  return (
    <>
      <ProductCategoryBanner />
      <SelectCategory allProducts={allProducts} allCategories={allCategories}/>
      <MachineDemand  allProducts={allProducts} />
      <MachinesInfoSection/>
    </>
  );
};

export default ProductCategory;
