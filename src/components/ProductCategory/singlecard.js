// Rename file to SingleCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

const SingleCard = ({ prod }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/product-details/${prod._id}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: { xs: "#fff", md: "#f9f9f9" },
        display: "flex",
        flexDirection: "column",
        height: "100%",
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
      <CardContent sx={{ display: "flex", flexDirection: "column", flex: "auto" }}>
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
            fontSize: "16px ",
          }}
          onClick={handleNavigate}
        >
          View Products
        </Button>
      </CardContent>
    </Card>
  );
};

export default SingleCard;
