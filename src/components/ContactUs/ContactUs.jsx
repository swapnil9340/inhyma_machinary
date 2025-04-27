import { Box } from "@mui/material";
import Address_Section from "./Address_Section";
import ContactBanner from "./ContactBanner";
import DistributorSupportCards from "./DistributorSupportCards";
import FAQ from "./FAQ";

 const   ContactUs = ()=>{
     return (
        <>
           <ContactBanner/> 
           <Address_Section/>
           <DistributorSupportCards/>
           <FAQ/>
         </>  
    )
}


export default ContactUs;