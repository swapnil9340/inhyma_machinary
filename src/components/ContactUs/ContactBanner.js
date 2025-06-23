import CommonBanner from "@/CommonComponents/CommonBanner";
import bannerImg from "../../../public/contactUs.svg"

const bannerContent = {
  heading1: "Let’s Connect – We’re Here to Help",
  heading2: "Have questions about our packaging machines or need a customized solution? Reach out to our team - we’re just a message or call away.",
buttons: [
  {
    btnName: "Call us",
    type: "call",
    value: "+91 83558 96311" // your actual support number
  },
  {
    btnName: "Send An Enquiry",
    type: "scroll",
    value: "contact-form" // ID of your contact form section
  }
],
  backgroundImg : bannerImg
};

const ContactBanner = () => {
  return <CommonBanner bannerContent={bannerContent} />;
};

export default ContactBanner;
