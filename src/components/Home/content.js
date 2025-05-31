import { Box, Typography, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
const Content = () => {
  const router = useRouter()
  const handleNavigate = (navprops) => {
    router.push(navprops)
  }
  return (
    <Box
      sx={{
        py: { xs: 4, md: 4 }, // vertical padding responsive
        px: 2,
        textAlign: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Container >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'text.primary',
            fontSize : {xs:"1.2rem" , md:"1.6rem"},
          }}
        >
          <Box component="span" sx={{ color: 'red', mr: 1 ,borderLeft: "4px solid #f44336" }}></Box>
          Complete Packaging & Automation Solutions Under One Roof
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.8,
            textAlign : {xs : "justify" ,md: "center"}
          }}
        >
          INHYMA Solutions LLP is a leading manufacturer, importer, and exporter of packaging machines and industrial material handling equipment. With over 13 years of experience, we provide 150+ high-performance solutions tailored for diverse industries,
          including food, pharma, cosmetics, and logistics.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            lineHeight: 1.8,
            textAlign : {xs : "justify" ,md: "center"}
          }}
        >
          Our mission is to empower manufacturers through cutting-edge automation, reliable machinery, and exceptional customer service - globally.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1955A6",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: 'none',
            borderRadius :"0",
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
          onClick={()=>handleNavigate("/about")} 
        >
          About Us
        </Button>
      </Container>
    </Box>
  );
};

export default Content;
