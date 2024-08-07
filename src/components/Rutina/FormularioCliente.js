import React, { useState } from 'react';
import './RutinaAdminIndex.css';

const FormularioCliente = ({ onClienteSeleccionado }) => {
  const [cliente, setCliente] = useState('');
  const [clientes] = useState([
    { nombre: 'Sofía Pérez', tipo: 'Endomorfo' },
    { nombre: 'Juan Gómez', tipo: 'Mesomorfo' },
    { nombre: 'Sebastian Camilo', tipo: 'Endomorfo' },
    { nombre: 'María Rodríguez', tipo: 'Hectomorfo' },
    { nombre: 'Carlos Martínez', tipo: 'Endomorfo' },
    { nombre: 'Ana Fernández', tipo: 'Mesomorfo' },
    { nombre: 'Pedro López', tipo: 'Hectomorfo' },
    { nombre: 'Laura Sánchez', tipo: 'Endomorfo' },
    { nombre: 'Andrea Camila', tipo:'Hectomorfo'},
    { nombre: 'Luis González', tipo: 'Mesomorfo' },
    { nombre: 'Valentina Díaz', tipo: 'Hectomorfo' },
    { nombre: 'Diego García', tipo: 'Mesomorfo' },
  ]);

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const handleBuscar = () => {
    const clienteSeleccionado = clientes.find((c) => c.nombre === cliente);
    onClienteSeleccionado(clienteSeleccionado);
  };

  return (
    <div className="formularioXD">
  <label>Seleccione Cliente:</label>
  <div className="input-container">
    <select value={cliente} onChange={handleChange}>
      <option value="">Seleccionar cliente</option>
      {clientes.map((cliente, index) => (
        <option key={index} value={cliente.nombre}>
          {cliente.nombre}
        </option>
      ))}
    </select>
    <i className="fas fa-search" onClick={handleBuscar}></i>
  </div>
</div>
  );
};

export default FormularioCliente;
