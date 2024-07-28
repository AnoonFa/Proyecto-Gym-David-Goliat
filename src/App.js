import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Plans from './components/Plans/Plans'
import PlanesCliente from './pages/Client/PlansPage/PlansClient';
import PlanesAdmin from './pages/Management/ManagePlans/PlansAdmi';

function App() {
  return (
    <Router>
      <div>
        <Header />


        <Routes>
          <Route path="/Client/PlansPage/PlansClient" element={<PlanesCliente />} />
          <Route path="/Management/ManagePlans/PlansAdmi" element={<PlanesAdmin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
