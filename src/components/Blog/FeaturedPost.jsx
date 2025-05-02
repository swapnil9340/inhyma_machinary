import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Packaging Machine for Your Industry",
    description:
      "Choosing the wrong machine can cost you time and money. This guide walks you through key selection criteria by industry and budget.",
    image: "/FP1.png",
  },
  {
    id: 2,
    title: "How to Choose the Right Packaging Machine for Your Industry",
    description:
      "Choosing the wrong machine can cost you time and money. This guide walks you through key selection criteria by industry and budget.",
      image: "/FP2.png",
    
  },
  {
    id: 3,
    title: "How to Choose the Right Packaging Machine for Your Industry",
    description:
      "Choosing the wrong machine can cost you time and money. This guide walks you through key selection criteria by industry and budget.",
      image: "/FP3.png",

  },
];

export default function FeaturedPosts() {
  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: "#455a75" }}
        >
          Featured Post
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {posts.map((post) => (
            <Grid key={post.id} item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="#2157a4"
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#606872"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {post.description}
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
