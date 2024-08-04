import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
import logo from '../../assets/images/David&GoliatLogo.png';
import logoutIcon from '../../assets/icons/LogOut.png'; 
import { useAuth } from '../../context/RoleContext';

const Header = () => {
  const { user, setUser } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/LoginP');
  };

  const handleLogoutClick = () => {
    setUser({ role: 'client' }); // Restablecer el rol del usuario al rol por defecto
    navigate('/'); // Redirigir al usuario a la página de inicio después de cerrar sesión
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  
  return (
  // Header con logo, botón de inicio de sesión, enlaces a las páginas y botón de logout
  <nav className="header">
    <div className="Rectangle100">
      <div className="DavidGoliat">
      <a href="#" className="logout" onClick={() => handleNavigation('/')}>
      <img src={logo} alt="Logo" className="LogoImage" />
        </a>
      </div>
      
      <div className="nav-links">

        {/* Enlaces para administrador si esta autenticado */}
        {user.role === 'admin' && (
            <>
              <a href="/IndexCliente/Client" className="Profile">Clases</a>
              <a href="/IndexCliente/PlanesCliente" className="Profile">Planes</a>
              <a href="/IndexCliente/ProductsClient" className="Profile">Productos</a>
              <a href="/IndexCliente/RutinesClient" className="Profile">Rutinas</a>
              <a href="/IndexCliente/Ticketera" className="Profile">Ticketera</a>
              <a href="/IndexCliente/Pagos" className="Profile">Pagos</a>
            </>
          )}
        {/* Enlaces para Empleado si esta autenticado */}
        {user.role === 'employee' && (
            <>
              <a href="/IndexCliente/Client" className="Profile">Clases</a>
              <a href="/IndexCliente/PlanesCliente" className="Profile">Planes</a>
              <a href="/IndexCliente/ProductsClient" className="Profile">Productos</a>
              <a href="/IndexCliente/RutinesClient" className="Profile">Rutinas</a>
              <a href="/IndexCliente/Ticketera" className="Profile">Ticketera</a>
              <a href="/IndexCliente/Pagos" className="Profile">Pagos</a>
            </>
          )}
        {/* Enlaces para Cliente si esta autenticado */}
       {user.role === 'client' && (
            <>
              <a href="/IndexCliente/ClassesPage/*" className="Profile">Clases</a>
              <a href="/IndexCliente/Planspage/*" className="Profile">Planes</a>
              <a href="/IndexCliente/Productspage/*" className="Profile">Productos</a>
              <a href="/IndexCliente/RoutinesPage/*" className="Profile">Rutinas</a>
              <a href="/IndexCliente/TicketeraPage/*" className="Profile">Ticketera</a>

            </>
          )}
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
