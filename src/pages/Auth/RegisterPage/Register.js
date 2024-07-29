import React, { useState } from 'react';
import './Register.css';

const RegisterForm = () => {
    const [role, setRole] = useState('cliente');
    const [formData, setFormData] = useState({
      nombre: '',
      telefono: '',
      correo: '',
      contrasena: '',
      foto: null,
      huella: null,
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (files) {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
        alert(`Usuario registrado:
            \nNombre: ${user.username}
            \nEmail: ${user.email}
            \nContraseña: ${user.password}
            \nRol: ${user.role}`);
        console.log(formData);
    };

    return (
        <div className="container">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Tipo de usuario:</label>
              <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="cliente">Cliente</option>
                <option value="empleado">Empleado</option>
                <option value="administrador">Administrador</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo:</label>
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña:</label>
              <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
            </div>
            <div className="upload-section">
              <div className="upload-box">
                <label htmlFor="foto">Subir Foto:</label>
                <input type="file" name="foto" accept="image/*" onChange={handleChange} />
              </div>
              <div className="upload-box">
                <label htmlFor="huella">Subir Huella:</label>
                <input type="file" name="huella" accept="image/*" onChange={handleChange} />
              </div>
            </div>
            <button type="submit" className="submit-button">Registrar</button>
          </form>
        </div>
      );
    };
    
    export default RegisterForm;