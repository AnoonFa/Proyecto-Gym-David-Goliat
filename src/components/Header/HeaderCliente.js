import React from "react";
import "./HeaderAdmin.css";
import { useNavigate, Link } from "react-router-dom";
import searchIcon from "../../assets/icons/SearchIcon.png"; // Ajusta esta ruta
import logo from "../../assets/images/David&GoliatLogo.png";
import logoutIcon from "../../assets/icons/LogOut.png"; // Ajusta esta ruta

function HeaderCliente() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
  };

  return (
    <div className="Rectangle100">
      <div className="TopSection">
        <div className="DavidGoliat">
          <img src={logo} alt="Logo" className="LogoImage" />
        </div>

        <div className="SearchBarWrapper">
          <div className="SearchBar">
            <div className="StateLayer">
              <div className="LeadingIcon">
                <img src={searchIcon} alt="Buscar" className="IconImage" />
              </div>
              <div className="Content">
                <input
                  type="text"
                  placeholder="Buscar Productos"
                  className="SearchInput"
                />
              </div>
            </div>
          </div>
          <div className="LogOut" onClick={handleLogoutClick}>
            <img src={logoutIcon} alt="LogOut" className="IconImage" />
          </div>
        </div>
      </div>
      <div className="Options">
        <Link to="/ClienteIndex/ClientClass" className="Clases">
          Clases
        </Link>
        <Link to="/ClienteIndex/PlanesCliente" className="Planes">
          Planes
        </Link>
        <Link to="/ClienteIndex/RutinesClient" className="Rutinas"> {/* Actualiza la ruta */}
          Rutinas
        </Link>
        <Link to="/ClienteIndex/ProductsClient" className="Productos">
          Productos
        </Link>
      </div>
    </div>
  );
}

export default HeaderCliente;
