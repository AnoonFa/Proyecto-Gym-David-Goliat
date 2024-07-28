import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Plans from './components/Plans/Plans'
import PlanesCliente from './pages/Client/PlansPage/PlansClient';
import PlanesAdmin from './pages/Management/ManagePlans/PlansAdmi';
import ClientPayments from './pages/Client/PaymentsPage/ClienPayments';
import AdminPayments from './pages/Management/ManagementPayments/AdminPayments';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
