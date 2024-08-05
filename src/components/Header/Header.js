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
              <button onClick={() => handleNavigation('/ClasesPage/')} className="Profile">Clases</button>
              <button onClick={() => handleNavigation('/IndexCliente/PlanesCliente')} className="Profile">Planes</button>
              <button onClick={() => handleNavigation('/IndexCliente/RutinesClient')} className="Profile">Rutinas</button>
              <button onClick={() => handleNavigation('/adminEmpleadoIndex/VerCliente')} className="Profile">Cliente</button>
              <button onClick={() => handleNavigation('/ProductsPage/')} className="Profile">Productos</button>
              <button onClick={() => handleNavigation('/IndexCliente/Ticketera')} className="Profile">Ticketera</button>
              <button onClick={() => handleNavigation('/IndexCliente/Pagos')} className="Profile">Pagos</button>
            </>
          )}
        {/* Enlaces para Empleado si esta autenticado */}
        {user.role === 'employee' && (
            <>
              <button onClick={() => handleNavigation('/ClasesPage/')} className="Profile">Clases</button>
              <button onClick={() => handleNavigation('/IndexCliente/PlanesCliente')} className="Profile">Planes</button>
              <button onClick={() => handleNavigation('/ProductsPage')} className="Profile">Productos</button>
              <button onClick={() => handleNavigation('/IndexCliente/RutinesClient')} className="Profile">Rutinas</button>
              <button onClick={() => handleNavigation('/IndexCliente/Ticketera')} className="Profile">Ticketera</button>
              <button onClick={() => handleNavigation('/IndexCliente/Pagos')} className="Profile">Pagos</button>
            </>
          )}
        {/* Enlaces para Cliente si esta autenticado */}
        {user.role === 'client' && (
            <>
              <button onClick={() => handleNavigation('/ClasesPage/')} className="Profile">Clases</button>
              <button onClick={() => handleNavigation('/PlansPage/')} className="Profile">Planes</button>
              <button onClick={() => handleNavigation('/ProductsPage/')} className="Profile">Productos</button>
              <button onClick={() => handleNavigation('/RutinesClient/')} className="Profile">Rutinas</button>
              <button onClick={() => handleNavigation('/')} className="Profile">Ticketera</button>
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
