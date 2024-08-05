import React from 'react';
import './ClienteForm.css';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../assets/icons/userIcon.png'; // icono del usuario 
import fingerprintIcon from '../../assets/icons/fingerprintIcon.png'; // icono de la huella 

const ClienteForm = () => {

    const navigate = useNavigate();

    const handleVolverClick = () => {
        navigate('/adminEmpleadoIndex'); // Redirigir al usuario a la página de inicio después de cerrar sesión
      };

  return (
    <div className="cliente-form">
      <h2>Formulario</h2>
      <div className="form-content">
        <div className="form-fields">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <select>
            <option value="" disabled selected>Sexo</option>
                <option value="admin">Hombre</option>
                <option value="employee">Mujer</option>
                {/*<option value="client">39 tipos de gay</option>*/}
            </select>
          <select>
            <option value="" disabled selected>Tipo de cuerpo deseado</option>
                <option value="admin">Hectomorfo</option>
                <option value="employee">Mesomorfo</option>
                <option value="client">Endomorfo</option>
            </select>
          <input type="text" placeholder="Peso" />
          <input type="text" placeholder="Altura" />
          <input type="text" readOnly placeholder='Membresia actual' className="full-width"/>
            <input type="text" readOnly placeholder='Plan actual' className="full-width"/>
            <input type="text" readOnly placeholder='Ticketera' className="full-width"/>
        </div>
        <div className="form-icons">
          <img src={userIcon} alt="User Icon" className="user-icon" />
          <img src={fingerprintIcon} alt="Fingerprint Icon" className="fingerprint-icon" />
        </div>
      </div>
      <div className="form-buttons">
        <button onClick={handleVolverClick} className="add-button">Agregar</button>
      </div>
    </div>
  );
};

export default ClienteForm;
