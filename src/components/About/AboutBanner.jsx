import CommonBanner from "@/CommonComponents/CommonBanner";
import bannerImg from "../../../public/AboutBanner.svg"

const bannerContent = {
  heading1: "Engineering the Future of Packaging & Automation",
  heading2: "Decades of experience. Global reach. Tailored packaging  and handling solutions that power industry performance.",
  backgroundImg : bannerImg
};

const AboutBanner = () => {
  return <CommonBanner bannerContent={bannerContent} />;
};

export default AboutBanner;
