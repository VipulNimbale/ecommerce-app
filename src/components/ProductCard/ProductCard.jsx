import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-img-wrapper">
          <CardMedia
            component="img"
            image={product.images[0]}
            alt={product.title}
            className="product-img"
          />
        </div>
        <div className="product-info-wrapper">
          <CardContent className="product-content">
            <Typography variant="h6" className="product-title">
              {product.title}
            </Typography>
            <Typography variant="body1" className="product-price">
              ${product.price}
            </Typography>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

export default ProductCard;
