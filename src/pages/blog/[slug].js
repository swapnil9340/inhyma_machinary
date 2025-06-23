import { Box, Typography } from "@mui/material";
import blogs from "../../components/blog.json";
import CommonBanner from "@/CommonComponents/CommonBanner";
import SeoHead from "@/components/SeoHead/SeoHead";

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  return { props: { blog } };
}

const BlogDetailBySlug = ({ blog }) => {
  return (
    <>
      <SeoHead
        title={blog.heading1}
        description="Explore Inhyma’s latest blogs and updates on technology trends, innovation, product insights, and thought leadership."
        keywords="Inhyma blog, tech insights, innovation news, product updates"
      />
      <CommonBanner bannerContent={blog} />
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4, maxWidth: "900px", mx: "auto" }}>
        {/* <Typography variant="h4" fontWeight={600} mb={3}>
        {blog.title}
      </Typography> */}

        <Box
          sx={{
            typography: "body1",
            color: "#333",
            "& h3": { mt: 4, mb: 2, fontSize: "1.25rem", fontWeight: 600 },
            "& h4": { mt: 3, mb: 1.5, fontSize: "1.1rem", fontWeight: 600 },
            "& p": { mb: 2 },
            "& ul": { pl: 3, mb: 2 },
            "& li": { mb: 0.5 },
            "& table": {
              width: "100%",
              borderCollapse: "collapse",
              my: 3,
              fontSize: "0.95rem",
            },
            "& th, & td": {
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            },
            "& th": {
              backgroundColor: "#f5f5f5",
              fontWeight: 600,
            },
          }}
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </Box>
    </>
  );
};

export default BlogDetailBySlug;
