import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Importa otras páginas según sea necesario

function App() {
  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  );
}

export default App;
