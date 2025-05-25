import MachineDemand from "./MachineDemand";
import MachinesInfoSection from "./MachinesInfoSection";
import ProductCategoryBanner from "./ProductCategoryBanner";
import SelectCategory from "./SelectCategory";


const ProductCategory = ({allCategories ,allProducts ,loading}) => { 
  return (
    <>
      <ProductCategoryBanner />
      <SelectCategory allProducts={allProducts} allCategories={allCategories} loading={loading}/>
      <MachineDemand  allProducts={allProducts} loading={loading} />
      <MachinesInfoSection/>
    </>
  );
};

export default ProductCategory;
