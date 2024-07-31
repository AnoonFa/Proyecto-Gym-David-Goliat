import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VerProducto from '../VerProductos/VerProductos';
import ProductForm from '../../Forms/ProductForm/ProductForm';
import Carousel from '../Carousel/Carousel';
import Products from '../Products/Products';
import Plans from '../Plans/Plans';

function ClientPage() {
  return (
    <>
      <Header />
      <Carousel />
      <Plans />
      <Products />
      <Footer />
    </>
  );
}

export default ClientPage;
