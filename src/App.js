import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Plans from './components/Plans/Plans'
import PlanesCliente from './pages/Client/PlansPage/PlansClient';
import PlanesAdmin from './pages/Management/ManagePlans/PlansAdmi';
import ClientPayments from './pages/Client/PaymentsPage/ClienPayments';
import AdminPayments from './pages/Management/ManagementPayments/AdminPayments';
import Register from './pages/Auth/RegisterPage/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoleSelector from './components/RoleSelector/RoleSelector';
import Carousel from './components/Carousel/Carousel';
import Products from './components/Products/Products';
import AdminPage from './components/adminEmpleadoIndex/adminEmpleadoIndex';
import RegisterForm from './pages/Auth/RegisterPage/Register';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import VerProducto from './components/VerProductos/VerProductos';
import ProductForm from './Forms/ProductForm/ProductForm'; 
import LoginP from './pages/Auth/LoginPage/Login';
//const isAdmin = true;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Carousel />
                <Plans />
                <Products />
                <Footer />
              </>
            }
          />
          
          <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
          <Route path="/Login/*" element={<LoginP />} />
          <Route path="/Register*" element={<RegisterForm />} />
          <Route path="/Productos*" element={<VerProducto />} />
          <Route path="/ProductForm*" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
