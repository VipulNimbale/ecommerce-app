import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/Cart';
import CheckoutPage from './Pages/Checkout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;
