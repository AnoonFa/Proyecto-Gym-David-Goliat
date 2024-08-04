import React from 'react';
import Plans from '../../../components/Plans/Plans';
import Products from '../../../components/Products/Products';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

function ProductsPage() {
  return (
    <div >
      <Header />
       <center>
        <h2>¡Nuestros Productos! </h2>
        
        <Products  /> 
        </center>
      <Footer />
    </div>
);
}
export default ProductsPage;
