import MachineDemand from "./MachineDemand";
import MachinesInfoSection from "./MachinesInfoSection";
import ProductCategoryBanner from "./ProductCategoryBanner";
import SelectCategory from "./SelectCategory";


const ProductCategory = ({allCategories ,allProducts ,loading , filteredCards, setFilteredCards}) => { 
  return (
    <>
      <ProductCategoryBanner />
      <SelectCategory allProducts={allProducts} allCategories={allCategories} loading={loading} filteredCards={filteredCards} setFilteredCards={setFilteredCards}/>
      <MachineDemand  allProducts={allProducts} loading={loading} />
      <MachinesInfoSection/>
    </>
  );
};

export default ProductCategory;
