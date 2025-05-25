import ChooseCategory from "./ChooseCategory";
import Cards from "./Cards";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";


const SelectCategory = ({ allProducts, allCategories ,loading }) => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [filteredCards, setFilteredCards] = useState([]);


  useEffect(() => {
    if (allCategories.length) {
      setSelectedCategory({ [allCategories[0].name]: true })
    }
  }, [JSON.stringify(allCategories)])

  console.log(allProducts)
  useEffect(() => {
    if (Object.keys(selectedCategory).length) {
      const result = allProducts.filter((product) => Object.keys(selectedCategory).includes(product.category) && selectedCategory[product.category] === true);
      setFilteredCards(result);
    }

  }, [JSON.stringify(selectedCategory)])

  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ padding: "20px 0" }} spacing={4}>
          <Grid size={{ xs: 12, md: 3 }} sx={{ width: "100%" }} >
            <ChooseCategory allCategories={allCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} loading={loading} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} >
            <Cards filteredCards={filteredCards} loading={loading} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SelectCategory;
