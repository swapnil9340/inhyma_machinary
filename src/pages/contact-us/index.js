import ContactUs from "@/components/ContactUs/ContactUs";
import SeoHead from "@/components/SeoHead/SeoHead";


 const   ContactPage = ()=>{
     return (
        <>
        <SeoHead
  title="Contact Us | Inhyma – Let’s Connect"
  description="Have questions or want to collaborate? Get in touch with the Inhyma team. We’re here to help you with your inquiries and solutions."
  keywords="contact Inhyma, get in touch, contact form, Inhyma support"
/>
         <ContactUs/>   
         </>  
    )
}


export default ContactPage;