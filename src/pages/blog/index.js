import Blog from "@/components/Blog/Blog";
import SeoHead from "@/components/SeoHead/SeoHead";
const BlogPage = ()=>{
    return (
       <>
           <SeoHead
  title="Blog | Inhyma Insights & Innovation Updates"
  description="Explore Inhyma’s latest blogs and updates on technology trends, innovation, product insights, and thought leadership."
  keywords="Inhyma blog, tech insights, innovation news, product updates"
/>
       <Blog/>
       </>
    )
}

export default BlogPage;