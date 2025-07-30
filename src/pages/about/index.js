import { AboutUs } from "@/components/About/AboutUs";
import SeoHead from "@/components/SeoHead/SeoHead";

const AboutPage = () => {
  return (
    <>
      <SeoHead
        title="About Us | Inhyma – Building Innovation with Purpose"
        description="Learn about Inhyma’s mission, vision, and values. Discover our journey and how we’re shaping the future through technology and innovation."
        keywords="about Inhyma, company overview, our story, Inhyma team"
      />
      <AboutUs />
    </>
  );
};

export default AboutPage;
