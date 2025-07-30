import ChooseCategory from "./ChooseCategory";
import Cards from "./Cards";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";


const SelectCategory = ({ allProducts, allCategories, loading, setloading, filteredCards, setFilteredCards }) => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [productloading, setproductloading] = useState(false);

  // Sort and set categories alphabetically
  useEffect(() => {
    const sorted = [...allCategories].sort((a, b) => a.name.localeCompare(b.name));
    setCategories(sorted);
  }, [allCategories]);

  // Filter products by selected category
  useEffect(() => {
    setproductloading(true);

    const selectedKeys = Object.keys(selectedCategory)
      .filter((key) => selectedCategory[key] === true)
      .map((key) => key.toLowerCase());

    const result =
      selectedKeys.length > 0
        ? allProducts.filter((product) =>
            selectedKeys.includes(product.category?.toLowerCase?.() || '')
          )
        : allProducts;

    setproductloading(false);
    setFilteredCards(result);
  }, [selectedCategory, allProducts]);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ padding: "20px 0" }} spacing={4}>
          <Grid size={{ xs: 12, md: 3 }} sx={{ width: "100%" }} >
            <ChooseCategory setloading={setloading} allCategories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} loading={loading} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} sx={{ justifyContent: "center" }}>
            <Cards filteredCards={filteredCards} loading={productloading} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SelectCategory;
