// import React, { useEffect, useState } from 'react';
// import { fetchProducts } from '../../Services/api';
// import ProductCard from '../ProductCard/ProductCard';
// import { TextField } from '@mui/material';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchProducts().then(data => setProducts(data));
//   }, []);

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <TextField
//         label="Search products"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../Services/api';
import ProductCard from '../ProductCard/ProductCard';
import { TextField, Button, ButtonGroup } from '@mui/material';

const categories = ['All', 'Furniture', 'Clothes', 'Toys', 'Electronics'];

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchProducts().then(data => {
      console.log(data); // <- inspect categories here
      setProducts(data);
    });
  }, []);
  

  const filteredProducts = products.filter(product => {
    const matchTitle = product.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === 'All' ||
      (typeof product.category === 'string' &&
       product.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchTitle && matchCategory;
  });
  

  return (
    <div className="product-list-container">
      <TextField
        label="Search products"
        variant="outlined"
        fullWidth
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><br></br>

      <ButtonGroup variant="outlined" className="category-buttons">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </ButtonGroup>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
