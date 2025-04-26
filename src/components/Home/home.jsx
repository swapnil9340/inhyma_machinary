import Banner from "./banner"
import Content from "./content"
import CTASection from "./ctasection"
import GlobalPresenceSection from "./GlobalPresenceSection"
import IndustriesServed from "./IndustriesServed"
import WhyTrustSection from "./infoacard"
import ProductCard from "./ProductCard"
import ProductCategories from "./productCategory"
import Tabs from "./tabs"
import TestimonialCard from "./TestimonialCard"

const Home = () => {
    return <>
        <Tabs></Tabs>
        <Banner></Banner>
        <Content></Content>
        <ProductCategories></ProductCategories>
        <WhyTrustSection></WhyTrustSection>
        <ProductCard></ProductCard>
        <IndustriesServed></IndustriesServed>
        <GlobalPresenceSection></GlobalPresenceSection>
        <TestimonialCard></TestimonialCard>
        <CTASection></CTASection>
    </>
}
export default Home