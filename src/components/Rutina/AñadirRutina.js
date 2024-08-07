import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RutinaAdminIndex.css'; // Importa el archivo CSS para estilos del formulario

function AñadirRutina() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const [cuerpoSeleccionado, setCuerpoSeleccionado] = useState('');
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false); // Estado para mostrar el mensaje de confirmación
  const [error, setError] = useState(''); // Estado para mostrar errores

  const clientes = ['Sofía Pérez','Juan Gómez','Sebastian Camilo','María Rodríguez','Carlos Martínez','Ana Fernández','Pedro López','Laura Sánchez','Andrea Camila','Luis González','Valentina Díaz','Diego García'];
  const cuerpos = ['Endomorfo', 'Mesomorfo', 'Ectomorfo'];

  const handleClienteChange = (event) => {
    setClienteSeleccionado(event.target.value);
  };

  const handleCuerpoChange = (event) => {
    setCuerpoSeleccionado(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!clienteSeleccionado || !cuerpoSeleccionado) {
      setError('Por favor, complete todos los campos antes de asignar.');
      return;
    }

    // Si todo está completo, limpiamos el error y mostramos el mensaje de confirmación
    setError('');
    setMostrarConfirmacion(true);
    console.log('Cliente seleccionado:', clienteSeleccionado);
    console.log('Cuerpo seleccionado:', cuerpoSeleccionado);
  };

  const handleVolver = () => {
    navigate('/adminEmpleadoIndex'); // Redirigir a la página /adminEmpleadoIndex
  };

  return (
    <div className="container">
      {!mostrarConfirmacion ? (
        <div className="button-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <label>
              Seleccione cliente:
              <select value={clienteSeleccionado} onChange={handleClienteChange}>
                <option value="">Cliente</option>
                {clientes.map((cliente) => (
                  <option key={cliente} value={cliente}>
                    {cliente}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Tipo de cuerpo:
              <select value={cuerpoSeleccionado} onChange={handleCuerpoChange}>
                <option value="">Seleccionar cuerpo</option>
                {cuerpos.map((cuerpo) => (
                  <option key={cuerpo} value={cuerpo}>
                    {cuerpo}
                  </option>
                ))}
              </select>
            </label>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Asignar</button>
          </form>
        </div>
      ) : (
        <div className="confirmacion-container">
          <div className="checkmark">✓</div>
          <p>La rutina de {cuerpoSeleccionado} fue asignada para {clienteSeleccionado}.</p>
          <button className='botonVolver' onClick={handleVolver}>Volver</button>
        </div>
      )}
    </div>
  );
}

export default AñadirRutina;
