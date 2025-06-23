import { Box, Grid, Stack } from "@mui/material";
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
import Image from "next/image";
export const AboutUs = () => {


const aboutData = [
  {
    title: "Engineered for Excellence, Powered by Trust",
    content:
      "At Inhyma Solutions LLP, we believe that engineering is not just about machines—it's about precision, reliability, and building long-term partnerships. Our clients trust us because we deliver more than just products—we deliver confidence.",
  },
  {
    title: "Innovation That Works for You",
    content:
      "Innovation isn’t just a buzzword—it’s how we solve real-world industrial challenges. From semi-automatic packaging systems to fully integrated automation lines, our technology is designed to adapt to your unique needs.",
  },
  {
    title: "Packaging Solutions That Scale With You",
    content:
      "Whether you're a local manufacturer or a global exporter, our scalable solutions are designed to support your growth. From compact standalone units to enterprise-scale automation lines, we build with flexibility and expansion in mind.",
  },
];

  return (
    <>

      <AboutBanner />
      <Box px={{ xs: 2, md: 6 }} bgcolor="#F8FAFC" justifyContent={'center'} display={'flex'} marginTop={'10px'}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" color="#1955A6" mb={2}>
              Why Choose Inhyma?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1.5}>
              With a legacy of engineering excellence and customer-first focus, we bring you more than just machines – we deliver growth enablers.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              ✅ Over 13 years of expertise in automation & packaging
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              ✅ Pan-India presence & global reach (India, China, Africa)
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ✅ Dedicated R&D, reliable service, and scalable solutions tailored for your business.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>

            <Image
              src={'/plant-and-equipment-solutions2.jpg'}
              alt="Why Choose Us"
              width={600}
              height={400}
              style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>

      </Box>

      <WhoWeAre />
      <Vision />
      <Headline />
      <CoreValues />
      {/* <WhyChooseUs /> */}
   <Box
  sx={{
    backgroundColor: '#ffffff',
    py: 3,
    px: { xs: 2, sm: 4, md: 5 },
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
    Why Partner with Inhyma?
  </Typography>

  <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', color: '#333' }}>
    Inhyma stands at the intersection of innovation and integrity. With over a decade of expertise in industrial automation and packaging, we don’t just deliver machines—we deliver tailored solutions that scale with your vision. Our customer-first approach, future-ready systems, and unwavering commitment to quality make us more than a vendor—we're your technology partner in progress.
  </Typography>
</Box>

      <OurJourney />
      <ServingIndustries />
      <Box px={{ xs: 2, md: 6 }} bgcolor="#F8FAFC" justifyContent={'center'} display={'flex'} marginTop={'10px'}>
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography variant="h4" fontWeight={600} color="#1955A6">
                About Us
              </Typography>

              {aboutData.map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.content}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <FoundersMessage />
      <ExplorePackaging />
      {/* <Quality /> */}

      <Box sx={{ marginBottom: "20px" }}></Box>
    </>
  );
};
