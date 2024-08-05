// src/pages/Album.js
import React, { useContext } from 'react';
import Carousel from '../../../components/Carusel/Carusel';
import SearchBar from '../../../components/SearchBar/SearchBar';
import CategoryCircles from '../../../components/CategoryCircles/CategoryCircles';
import ProductCard from '../../../components/ProductCard/ProductCard';
import ProductForm from '../../../components/ProductForm/ProductForm';
import { ProductsContext } from '../../../context/ProductsContext';
import './ProdcutPage.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ProductPage = () => {
  const { filteredProducts, products } = useContext(ProductsContext);

  const productsToShow = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <>
    <Header />
    <div className="album-page">
      <Carousel />
      <CategoryCircles />
      <SearchBar />
      <ProductForm />
      <div className="products-container">
        <h2>Productos</h2>
        <div className="products-grid">
          {productsToShow.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;
