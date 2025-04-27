import { Container, Grid } from "@mui/material";
import Address from "./Address";
import ContactForm from "./ContactForm";

const Address_Section = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{marginTop : {xs:2 ,md:10}}}>
        <Grid container sx={{placeItems:'center'}}>
          <Grid item size={{xs:12 ,md : 6}}>
            <Address />
          </Grid>
          <Grid item size={{xs:12 ,md : 6}}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Address_Section;
