import React from 'react';
import './Header.css';
import searchIcon from '../../assets/icons/SearchIcon.png'; // Ajusta esta ruta
import logo from '../../assets/images/David&GoliatLogo.png'
import logoutIcon from '../../assets/icons/LogOut.png'; // Ajusta esta ruta

function Header() {
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
          <div className="LogOut">
            <img src={logoutIcon} alt="LogOut" className="IconImage" />
          </div>
        </div>
      </div>
      <div className="Options">
        <a href="/Clases" className="Clases">Clases</a>
        <a href="/Planes" className="Planes">Planes</a>
        <a href="/Rutina" className="Rutina">Rutina</a>
        <a href="/Productos" className="Productos">Productos</a>
      </div>
    </div>
  );
}

export default Header;