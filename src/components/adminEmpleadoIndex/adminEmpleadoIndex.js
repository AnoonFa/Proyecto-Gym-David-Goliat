import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/HeaderAdmin'; 
import Footer from '../Footer/Footer'; 
import VerCliente from '../VerCliente/VerCliente';
import RegisterForm from '../../pages/Auth/RegisterPage/Register';
import VerProducto from '../../components/VerProductos/VerProductos';
import ProductForm from '../../Forms/ProductForm/ProductForm';


function AdminPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Bienvenido, Administrador</h2>} />
        <Route path="VerCliente" element={
          <div style={{ display: 'flex'}}>
            <VerCliente />
            <RegisterForm />
            </div>
        } />
        <Route path="Productos" element={<VerProducto />} />
        <Route path="resultados" element={<ProductForm />} />
        {/* Otras rutas aquí */}
      </Routes>
      <Footer />
    </>
  );
}


export default AdminPage;
