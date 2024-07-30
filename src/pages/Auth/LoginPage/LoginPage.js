import React from 'react';
import './LoginPage.css';
import { FaUser, FaLock, FaBriefcase } from "react-icons/fa";

const LoginRegistro = () => {
  
  return (

      <div className="fondo-wrapper">
        <div className="fondo">
          <div className='contenedor-form login' >
            <form action="#">
              <h2>Iniciar sesión</h2>
              <div className="contenedor-input ">
                <input type="text" placeholder='Username' required />
                <FaUser className='icono' />
              </div>
              <div className="contenedor-input">
                <input type="password" placeholder='Password' required />
                <FaLock className='icono' />
              </div>
              <div className="contenedor-input">
                <select required>
                  <option value="" disabled selected>Selecciona tu rol</option>
                  <option value="admin">Administrador</option>
                  <option value="employee">Empleado</option>
                  <option value="client">Cliente</option>
                </select>
                <FaBriefcase className='icono' />
              </div>
              <div className="recordar">
                <label><input type="checkbox" /> Recordar sesión</label>
                <a href='#'>Olvidé la contraseña?</a>
              </div>
              <button type="submit" className="btn">Iniciar sesión</button>
              
            </form>
          </div>

          
        </div>
      </div>

  );
};

export default LoginRegistro;
