import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Benefits of Automatic Strapping Machines",
    date: "23rd, March 2025",
    image: "/LBP1.png",
  },
  {
    id: 2,
    title: "Comparing Shrink Wrapping vs. Stretch Wrapping",
    date: "19th, Jan 2025",
    image: "/LBP2.png",
  },
  {
    id: 3,
    title: "Why Material Handling Automation Boosts ROI",
    date: "3rd, Feb 2025",
    image: "/LBP3.png",
  },
];

export default function LatestBlogPosts() {
  return (
    <Container maxWidth="xxl" disableGutters={false} sx={{bgcolor :"#EBF4FF"}}>

      <Box sx={{ py: 6 ,display :"grid" ,placeItems :"center" }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight={600}
          color="#455a75"
          gutterBottom
        >
          Latest Blog Posts
        </Typography>

        <Grid container spacing={3} justifyContent="center"  alignItems={'center'} sx={{ mt: 3 ,width: {xs:"100%" ,md:"60%"} }}>
          {blogPosts.map((post) => (
            <Grid key={post.id} item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                />
                <CardContent sx={{textAlign : 'center'}}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#2157a4"
                    sx={{ mb: 1, minHeight: "48px" }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#606872", mb: 2 }}>
                    {post.date}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "#2157a4" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
