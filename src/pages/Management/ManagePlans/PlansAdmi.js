import React from 'react';
import Button from '../../components/Button';

function PlanesAdmin() {
  return (
    <div>
      <h1>Planes para Administradores</h1>
      <Button variant="add">Agregar</Button>
      <Button variant="delete">Eliminar</Button>
    </div>
  );
}

export default PlanesAdmin;