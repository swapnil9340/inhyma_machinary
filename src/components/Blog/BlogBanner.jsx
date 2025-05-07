import CommonBanner from "@/CommonComponents/CommonBanner";
import blogBanner from "../../../public/blogBanner.png"


const bannerContent ={
     heading1 : "Insights, Trends & Guides on Packaging Automation",
     heading2 : "Discover expert insights, industry news, and practical guides on packaging, automation, and material handling. Stay informed and empowered with INHYMA.",
     backgroundImg : blogBanner
}

const BlogBanner =()=>{
    return (
        <CommonBanner bannerContent={bannerContent}/>
    )
}

export default BlogBanner