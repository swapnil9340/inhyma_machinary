import ApplicationsTable from "./ApplicationsTable";
import CategoryBanner from "./CategoryBanner";
import IndustrialExcellence from "./IndustrialExcellence";
import ProductListing from "./ProductListing";
import TrustedClients from "./TrustedClients";

const Category = () => {
  return (
    <>
      <CategoryBanner />
      <IndustrialExcellence />
      <ProductListing/>
      <TrustedClients/>
      <ApplicationsTable/>
    </>
  );
};

export default Category;
