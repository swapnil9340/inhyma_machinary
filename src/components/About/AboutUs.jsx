import { Box } from "@mui/material";
import { Vision } from "./Vision";
import Headline from "./Headline";
import CoreValues from "./CoreValues";
import WhyChooseUs from "./WhyChooseUs";
import OurJourney from "./OurJourney";
import ServingIndustries from "./ServingIndustries";
import FoundersMessage from "./FounderMessage";
import ExplorePackaging from "./ExplorePackaging";
import Quality from "./Quality";
import AboutBanner from "./AboutBanner";
import WhoWeAre from "./WhoWeAre";
import { Typography } from "@mui/material";
export const AboutUs = () => {
  return (
    <>

      <AboutBanner />
      <WhoWeAre />
      <Vision />
      <Headline />
      <CoreValues />
      {/* <WhyChooseUs /> */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          py: 6,
          px: { xs: 2, sm: 4, md: 8 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          color="#1955A6"
          gutterBottom
        >
          Why Choose Inhyma?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', color: '#333' }}>
          At Inhyma, we believe in blending technology with trust. Our solutions are not just innovative — they are designed to empower your business, ensure long-term reliability, and push the boundaries of what's possible in industrial excellence.
        </Typography>
      </Box>
      <OurJourney />
      <ServingIndustries />
      <FoundersMessage />
      <ExplorePackaging />
      <Quality />

      <Box sx={{ marginBottom: "20px" }}></Box>
    </>
  );
};
