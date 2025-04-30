// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProductById } from '../Services/api';
// import { useCart } from '../contexts/CartContext';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetchProductById(id).then(data => setProduct(data));
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <img src={product.images[0]} alt={product.title} className="w-64" />
//       <h2 className="text-2xl">{product.title}</h2>
//       <p>{product.description}</p>
//       <p className="text-lg font-bold">${product.price}</p>
//       <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 mt-2">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;



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
