// import React from 'react';
// import { useCart } from '../contexts/CartContext';
// import { Link } from 'react-router-dom';

// function CartPage() {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl mb-4">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="border p-2 my-2">
//               <h2>{item.title}</h2>
//               <p>${item.price}</p>
//               <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2">
//                 Remove
//               </button>
//             </div>
//           ))}
//           <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 mt-4 inline-block">
//             Go to Checkout
//           </Link>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartPage;


import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Card, CardMedia, CardContent, CardActions } from '@mui/material';

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <Container maxWidth="md" className="cart-container">
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} className="cart-item-card">
              <CardMedia
                component="img"
                image={item.images[0]}
                alt={item.title}
                className="cart-item-image"
              />
              <CardContent className="cart-item-content">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">${item.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))}
          <Link to="/checkout">
            <Button variant="contained" color="success" sx={{ marginTop: '1rem' }}>
              Go to Checkout
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}

export default CartPage;

