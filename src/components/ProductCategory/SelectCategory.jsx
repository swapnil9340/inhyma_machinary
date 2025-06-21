import ChooseCategory from "./ChooseCategory";
import Cards from "./Cards";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";


const SelectCategory = ({ allProducts, allCategories ,loading ,filteredCards, setFilteredCards}) => {
  const [selectedCategory, setSelectedCategory] = useState({});
  


  // useEffect(() => {
  //   if (allCategories.length) {
  //     setSelectedCategory({ [allCategories[0].name]: true })
  //   }
  // }, [JSON.stringify(allCategories)])


 useEffect(() => {
  const selectedKeys = Object.keys(selectedCategory).filter(
    (key) => selectedCategory[key] === true
  );

  if (selectedKeys.length > 0) {
    const result = allProducts.filter((product) =>
      selectedKeys.includes(product.category)
    );
    setFilteredCards(result);
  } else {
    setFilteredCards(allProducts);
  }
}, [selectedCategory, allProducts]);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ padding: "20px 0" }} spacing={4}>
          <Grid size={{ xs: 12, md: 3 }} sx={{ width: "100%" }} >
            <ChooseCategory allCategories={allCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} loading={loading} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} sx={{justifyContent:"center"}}>
            <Cards filteredCards={filteredCards} loading={loading} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SelectCategory;
