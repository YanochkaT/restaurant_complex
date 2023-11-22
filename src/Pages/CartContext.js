// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('selectedProducts');
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addProduct = (newProduct) => {
    const updatedProducts = selectedProducts.map((product) =>
      product.id === newProduct.id ? { ...product, count: product.count + newProduct.count } : product
    );

    if (!updatedProducts.some((product) => product.id === newProduct.id)) {
      updatedProducts.push(newProduct);
    }

    setSelectedProducts(updatedProducts);
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  const updateProductCount = (productId, count) => {
    const updatedProducts = selectedProducts.map((product) =>
      product.id === productId ? { ...product, count: product.count + count } : product
    );

    setSelectedProducts(updatedProducts);
  };

  return (
    <CartContext.Provider value={{ selectedProducts, addProduct, clearCart, updateProductCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
