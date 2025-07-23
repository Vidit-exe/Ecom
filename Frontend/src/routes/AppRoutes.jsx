import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import CartPage from '../pages/CartPage';
import Layout from '../layout/Layout';
import AboutPage from '../pages/AboutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
