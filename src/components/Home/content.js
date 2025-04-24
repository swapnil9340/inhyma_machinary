import { Box, Typography, Button, Container } from '@mui/material';

const Content = () => {
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
          }}
        >
          <Box component="span" sx={{ color: 'red', mr: 1 }}>|</Box>
          Complete Packaging & Automation Solutions Under One Roof
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.8,
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
          }}
        >
          Our mission is to empower manufacturers through cutting-edge automation, reliable machinery, and exceptional customer service - globally.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          About Us
        </Button>
      </Container>
    </Box>
  );
};

export default Content;
