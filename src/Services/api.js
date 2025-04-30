const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};
