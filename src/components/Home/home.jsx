import axios from "axios"
import Banner from "./banner"
import Content from "./content"
import CTASection from "./ctasection"
import GlobalPresenceSection from "./GlobalPresenceSection"
import IndustriesServed from "./IndustriesServed"
import WhyTrustSection from "./infoacard"
import ProductCard from "./ProductCard"
import ProductCategories from "./productCategory"
import TestimonialCard from "./TestimonialCard"
import { useEffect, useState } from "react"

const Home = () => {

    const [allCategories, setAllCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const getAllCategory = async () => {
        try {
            const [categoryRes, productRes] = await Promise.all([
                axios.get("https://inhyma-machinary-git-master-swapnil9340s-projects.vercel.app/api/category"),
                axios.get("https://inhyma-machinary-git-master-swapnil9340s-projects.vercel.app/api/getProducts") // <- change this to your actual second API
            ]);
            setAllCategories(categoryRes?.data)
            setAllProducts(productRes?.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllCategory();

    }, [])



    return <>
        <Banner></Banner>
        <Content></Content>
        <ProductCategories allProducts={allProducts} allCategories={allCategories}></ProductCategories>
        <WhyTrustSection></WhyTrustSection>
        <ProductCard allProducts={allProducts}></ProductCard>
        <IndustriesServed></IndustriesServed>
        <GlobalPresenceSection></GlobalPresenceSection>
        <TestimonialCard></TestimonialCard>
        <CTASection></CTASection>
    </>
}
export default Home