import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Plans from './components/Plans/Plans';
import RegisterForm from './pages/Auth/RegisterPage/Register';
import LoginP from './pages/Auth/LoginPage/LoginPage';
import ClientPage from './components/IndexCliente/ClienteIndex';
import AdminPage from './components/adminEmpleadoIndex/adminEmpleadoIndex';
import VerProducto from './components/VerProductos/VerProductos';
import ProductForm from './Forms/ProductForm/ProductForm'; 
import Carousel from './components/Carousel/Carousel';
import Products from './components/Products/Products';
import Login from './pages/Auth/LoginPage/Login';
import { AuthProvider } from './context/RoleContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Login />
                  <Plans />
                  <Products />
                  <Footer />
                </>
              }
            />
            <Route path="/ClienteIndex/*" element={<ClientPage />} />
            <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
            <Route path="/LoginP/*" element={<LoginP />} />
            <Route path="/Register/*" element={<RegisterForm />} />
            <Route path="/Productos/*" element={<VerProducto />} />
            <Route path="/ProductForm/*" element={<ProductForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
