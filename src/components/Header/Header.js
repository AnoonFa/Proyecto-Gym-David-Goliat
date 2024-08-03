import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/David&GoliatLogo.png';
import logoutIcon from '../../assets/icons/LogOut.png'; 
import { useAuth } from '../../context/RoleContext';

const Header = () => {
  const { user, setUser } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleLogoutClick = () => {
    setUser({ role: 'client' }); // Restablecer el rol del usuario al rol por defecto
    navigate('/'); // Redirigir al usuario a la página de inicio después de cerrar sesión
  };

  return (
  // Header con logo, botón de inicio de sesión, enlaces a las páginas y botón de logout
  <nav className="header">
    <div className="Rectangle100">
      <div className="DavidGoliat">
        <a href="#" className="logout">
          <img src={logo} alt="Logo" className="LogoImage" />
        </a>
      </div>
      
      <div className="nav-links">
        {/* Enlaces condicionales basados en el rol del usuario */}
        <a href="" className="Clases">Clases</a>
        <a href="" className="Planes">Planes</a>
        <a href="" className="Rutina">Rutina</a>
        <a href="" className="Productos">Productos</a>

        {/* Enlaces para administrador si esta autenticado */}
        {user.role === 'admin' && <a href="/admin" className="Admin">Clases</a>}
        {user.role === 'admin' && <a href="/admin" className="Admin">Planes</a>}
        {user.role === 'admin' && <a href="/admin" className="Admin">Productos</a>}
        {user.role === 'admin' && <a href="/admin" className="Admin">Rutinas</a>}
        {user.role === 'admin' && <a href="/admin" className="Admin">Ticketera</a>}  
        {user.role === 'admin' && <a href="/admin" className="Admin">Pagos</a>}        

        {/* Enlaces para Empleado si esta autenticado */}
        {user.role === 'employee' && <a href="/employee" className="Employee">Clases</a>}
        {user.role === 'employee' && <a href="/employee" className="Employee">Planes</a>} 
        {user.role === 'employee' && <a href="/employee" className="Employee">Productos</a>}
        {user.role === 'employee' && <a href="/employee" className="Employee">Ticketera</a>}
        {user.role === 'employee' && <a href="/employee" className="Employee">Pagos</a>}

        {/* Enlaces para Cliente si esta autenticado */}
        {user.role !== 'client' && <a href="/profile" className="Profile">Clases</a>}
        {user.role!== 'client' && <a href="/profile" className="Profile">Planes</a>}
        {user.role!== 'client' && <a href="/profile" className="Profile">Productos</a>}
        {user.role!== 'client' && <a href="/profile" className="Profile">Ticketera</a>}
        {user.role !== 'client' && <a href="/profile" className="Profile">Pagos</a>}
      </div>
      
      <div className="login-container">
        {/* Botón de login/logout basado en si el usuario está autenticado o no */}
        {user.role === 'client' ? (
          <button onClick={handleLoginClick} className="LoginButtonLink">Iniciar Sesión</button>
        ) : (
          <button onClick={handleLogoutClick} className="LogoutButtonLink">
            <img src={logoutIcon} alt="Logout" className="LogoutIcon" />
          </button>
        )}
      </div>
    </div>
  </nav>
  );
}

export default Header;
