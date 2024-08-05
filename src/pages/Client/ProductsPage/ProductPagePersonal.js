import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../context/ProductsContext';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './ProductPagePersonal.css';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

const ProductPagePersonal = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
    <Header/>
    <div className="product-page">
      <h2>{category}</h2>
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPagePersonal;
