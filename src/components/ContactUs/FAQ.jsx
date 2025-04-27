import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// using new Grid2

export default function FAQ() {
  return (
    <Container  maxWidth="xl" sx={{marginTop : 10 ,marginBottom : 10}}>
      <Typography variant="h5" mb={{xs:1 ,md : 4}} sx={{color:"#000"}}>
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={{md:20}}>
        {/* FAQ 1 */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{width :'100%'}}>
          <Accordion variant="outlined" sx={{ boxShadow: 'none' ,backgroundColor:"transparent" ,border:"none" }}>
            <AccordionSummary  sx={{ p: 0  ,borderBottom: '1px solid #e0e0e0'}}>
              <Typography fontWeight="bold" color="#1955A6">
                Do you ship internationally?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0, pt: 1 }}>
              <Typography color="#606872">
                Yes, we serve clients across India, Asia, and Africa.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* FAQ 2 */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{width :'100%'}}>
          <Accordion variant="outlined" sx={{ boxShadow: 'none' , backgroundColor:"transparent" ,border:"none" }}>
            <AccordionSummary  sx={{ p: 0 ,borderBottom: '1px solid #e0e0e0' }}>
              <Typography fontWeight="bold" color="#1955A6" >
                Can I request a demo or consultation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0, pt: 1 }}>
              <Typography color="#606872">
                Absolutely. Just fill in the contact form, and we'll schedule a demo based on your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      </Container>
  );
}
