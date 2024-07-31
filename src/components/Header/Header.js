import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import searchIcon from '../../assets/icons/SearchIcon.png'; 
import logo from '../../assets/images/David&GoliatLogo.png';
import logoutIcon from '../../assets/icons/LogOut.png'; 

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
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
                <input type="text" placeholder="Buscar Productos" className="SearchInput" />
              </div>
            </div>
          </div>
          <div className="LoginButton">
            <button onClick={handleLoginClick} className="LoginButtonLink">Iniciar Sesión</button>
          </div>
          {/*
          <div className="LogOut">
            <img src={logoutIcon} alt="LogOut" className="IconImage" />
          </div>
          */}
        </div>
      </div>
      <div className="Options">
        <a href="" className="Clases">Clases</a>
        <a href="" className="Planes">Planes</a>
        <a href="" className="Rutina">Rutina</a>
        <a href="" className="Productos">Productos</a>
      </div>
    </div>
  );
}

export default Header;
