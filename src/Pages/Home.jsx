import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../Services/api';
import ProductList from '../components/ProductList/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
