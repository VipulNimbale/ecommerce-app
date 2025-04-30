import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../Services/api';
import { useCart } from '../contexts/CartContext';
import { Button, CircularProgress, Container } from '@mui/material';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <div className="product-detail-container">
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
