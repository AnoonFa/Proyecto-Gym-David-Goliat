// src/contexts/ProductsContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productName) => {
    setProducts(products.filter(product => product.name !== productName));
  };

  return (
    <ProductsContext.Provider value={{ products, filteredProducts, setFilteredProducts, addProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
