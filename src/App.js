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
//import VerCliente from './components/VerCliente/VerCliente';

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
                <Register />
                <Plans />
                <Products />
                <Footer />
              </>
            }
          />
          
          <Route path="/adminEmpleadoIndex/*" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
