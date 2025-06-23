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


import posts from "@/components/blog.json";
import Link from "next/link";

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
                  {/* <Typography
                    variant="body2"
                    color="#606872"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {post.description}
                  </Typography> */}
                   <Link href={`/blog/${post.slug}`} passHref>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "#2157a4" }}
                    >
                      Read More
                    </Button>
                    </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
