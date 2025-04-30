import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container maxWidth="md" className="checkout-container">
      <Typography variant="h4" gutterBottom>Checkout</Typography>

      {cart.map(item => (
        <Card key={item.id} className="checkout-item-card">
          <CardMedia
            component="img"
            image={item.images[0]}
            alt={item.title}
            className="checkout-item-image"
          />
          <CardContent className="checkout-item-content">
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">${item.price}</Typography>
          </CardContent>
        </Card>
      ))}

      <Typography variant="h6" className="checkout-total">Total: ${total.toFixed(2)}</Typography>

      <Button
        variant="contained"
        color="success"
        onClick={handleCheckout}
        className="checkout-button"
      >
        Confirm Order
      </Button>
    </Container>
  );
}

export default CheckoutPage;

