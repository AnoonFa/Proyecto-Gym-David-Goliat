import React, { useState} from 'react';
import './LoginPage.css';
import { FaUser, FaLock, FaBriefcase } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegistro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (role === 'client') {
      navigate('/ClienteIndex');
    } else if (role === 'admin') {
      navigate('/adminEmpleadoIndex');
    } else if (role === 'employee') {
      navigate('/adminEmpleadoIndex');
    } else {
      alert('Por favor, selecciona un rol válido');
    }
  };

  return (
    <div className="fondo-wrapper">
      <div className="fondo">
        <div className='contenedor-form login'>
          <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div className="contenedor-input">
              <input 
                type="text" 
                placeholder='Username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
              <FaUser className='icono' />
            </div>
            <div className="contenedor-input">
              <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <FaLock className='icono' />
            </div>
            <div className="contenedor-input">
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                required
              >
                <option value="" disabled>Selecciona tu rol</option>
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
