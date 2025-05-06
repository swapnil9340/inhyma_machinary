import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const ProductCard = ({ title, description, image }) => {
  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 260,
        borderRadius: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt={title}
        sx={{
          objectFit: 'contain',
          p: 2,
          mx: 'auto',
          width: '70%',
        }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: 14 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: 13 }}
        >
          {description}
        </Typography>
        <Button variant="contained" color="primary" size="small">
          View Products
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
