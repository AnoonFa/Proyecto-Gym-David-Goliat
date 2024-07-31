import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import LoginRegistro from './LoginPage';
import AdminPage from '../../../components/adminEmpleadoIndex/adminEmpleadoIndex';
import ClientPage from '../../../components/IndexCliente/IndexCliente';

function LoginP() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRegistro />} />
        <Route path="/ClienteIndex/*" element={<ClientPage />} />
        <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LoginP;

  