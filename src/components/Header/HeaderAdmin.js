import React from "react";
import "./HeaderAdmin.css";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/SearchIcon.png"; // Ajusta esta ruta
import logo from "../../assets/images/David&GoliatLogo.png";
import logoutIcon from "../../assets/icons/LogOut.png"; // Ajusta esta ruta

function HeaderAdmin() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
  };

  const handlePlanesClick = () => {
    navigate("/adminEmpleadoIndex/PlansAdmin");
  };

  const handleClasesClick = () => {
    navigate("/adminEmpleadoIndex/VerClases"); // Asegúrate de que esta ruta es correcta
  };

  const handleClientesClick = () => {
    navigate("/adminEmpleadoIndex/VerCliente");
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
        <a href="" className="Clases" onClick={handleClasesClick}>
          Clases
        </a>
        <a href="" className="Planes" onClick={handlePlanesClick}>
          Planes
        </a>
        <a
          href=""
          className="Rutina"
          onClick={() => navigate("/adminEmpleadoIndex/Rutina")}
        >
          Rutina
        </a>
        <a href="" className="Clientes" onClick={handleClientesClick}>
          Clientes
        </a>
        <a
          href=""
          className="Ticketera"
          onClick={() => navigate("/adminEmpleadoIndex/Ticketera")}
        >
          Ticketera
        </a>
        <a
          href=""
          className="Productos"
          onClick={() => navigate("/adminEmpleadoIndex/Productos")}
        >
          Productos
        </a>
      </div>
    </div>
  );
}

export default HeaderAdmin;
