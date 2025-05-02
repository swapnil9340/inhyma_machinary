import CommonBanner from "@/CommonComponents/CommonBanner";

const bannerContent = {
  heading1: "Let’s Connect – We’re Here to Help",
  heading2: "Have questions about our packaging machines or need a customized solution? Reach out to our team - we’re just a message or call away.",
  buttons: [
    {
      btnName: "Call us",
    },
    {
      btnName: "Send An Enquiry",
    },
  ],
};

const ContactBanner = () => {
  return <CommonBanner bannerContent={bannerContent} />;
};

export default ContactBanner;
