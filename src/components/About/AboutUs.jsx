import { Box} from "@mui/material";
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

export const AboutUs = () => {
  return (
    <>

      <AboutBanner />
      <WhoWeAre />
      <Vision />
      <Headline />
      <CoreValues />
      <WhyChooseUs />
      <OurJourney />
      <ServingIndustries />
      <FoundersMessage />
      <ExplorePackaging />
      <Quality />

      <Box sx={{ marginBottom: "20px" }}></Box>
    </>
  );
};
