import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Box,
  CircularProgress,
  Container
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Cards = ({ filteredCards, loading }) => {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(6); // Show 3 cards initially

  const handleNavigate = (item) => {
    router.push(`/product-details/${item._id}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more cards
  };

  if (loading) {
    return (
      <Box sx={{ width: "100%", py: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  if (filteredCards.length === 0) {
    return (
      <Box sx={{ width: "100%", py: 5 }}>
        <Typography textAlign="center">No Product Found</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} sx={{justifyContent:"center"}}>
        {filteredCards.slice(0, visibleCount).map((prod) => (
          <Grid item xs={12} sm={6} md={4} key={prod._id}>
            <Card
              sx={{
                backgroundColor: { xs: "#fff", md: "#f9f9f9" },
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width:"295px",
                border: { xs: "1px solid #C9C9C9", md: "none" },
              }}
              elevation={0}
            >
              <CardMedia
                component="img"
                image={prod?.images?.[0]?.url}
                alt={prod?.images?.[0]?.alt}
                sx={{
                  objectFit: "contain",
                  p: 2,
                  border: { xs: "none", md: "2px solid #C9C9C9" },
                  height: { xs: "150px", md: "200px" },
                  mixBlendMode: "darken",
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: "auto",
                }}
              >
                <Typography
                  fontWeight={600}
                  sx={{
                    WebkitLineClamp: 2,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#606872",
                    fontSize: "18px",
                  }}
                >
                  {prod?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    my: 1,
                    WebkitLineClamp: 3,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "14px",
                  }}
                >
                  {prod?.description}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#2157a4",
                    width: "fit-content",
                    borderRadius: 0,
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                  onClick={() => handleNavigate(prod)}
                >
                  View Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {visibleCount < filteredCards.length && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: "#2157a4",
              textTransform: "capitalize",
              fontSize: "16px",
              px: 4,
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Cards;
