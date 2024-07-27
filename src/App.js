import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyCalendar from './components/Calendar/Calendar'
import AdminCalendar from './components/Calendar/AdminCalendar'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header /> 
      {/* Otros componentes y contenido de la aplicación */}

      <MyCalendar events={[]} />
      {/* Calendario para clientes*/}

      {/* Para el calendario de administradores */}
      <AdminCalendar />

      <Footer />
    </div>
  );
}

export default App;