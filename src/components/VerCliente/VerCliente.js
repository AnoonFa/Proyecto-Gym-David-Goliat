import React from 'react';
import './VerCliente.css';
import Button from '../Button/Button';

function VerCliente() {
  return (
    <div className="VerCliente">
      <h2>Buscar cliente</h2>
      <div className="ClienteForm">
        <div>
          <label>Nombre: </label>
          <input type="text" />
        </div>
        <div>
          <label>Plan: </label>
          <input type="text" />
        </div>
        <div>
          <label>Teléfono: </label>
          <input type="text" />
        </div>
        <Button>Buscar</Button>
      </div>
      <div className="ClienteDatabase">
        <h3>Base de datos de los Clientes</h3>
        <div className="ClienteLista">
          <div className="ClienteItem">
            <input type="text" readOnly value="Cliente 1" />
            <Button>Modificar</Button>
          </div>
          <div className="ClienteItem">
            <input type="text" readOnly value="Cliente 2" />
            <Button>Modificar</Button>
          </div>
          <div className="ClienteItem">
            <input type="text" readOnly value="Cliente 3" />
            <Button>Modificar</Button>
          </div>
          <div className="ClienteItem">
            <input type="text" readOnly value="Cliente 4" />
            <Button>Modificar</Button>
          </div>
        </div>
        <div className="Boton">
        <Button> Agregar Cliente</Button>
        </div>
      </div>
    </div>
  );
}

export default VerCliente;
