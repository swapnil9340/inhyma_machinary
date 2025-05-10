import ChooseCategory from "./ChooseCategory";
import Cards from "./Cards";
import { Container, Grid } from "@mui/material";

const SelectCategory = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{padding : "20px 0"}}  spacing={4}>
          <Grid size={{xs:12 , md:3}} sx={{width : "100%"}} >
            <ChooseCategory />
          </Grid>
          <Grid size={{xs:12 , md:8}} sx={{alignContent : 'center'}}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SelectCategory;
