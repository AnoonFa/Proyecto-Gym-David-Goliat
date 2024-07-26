import React from 'react';
import './Header.css';
import searchIcon from '../../assets/icons/SearchIcon.png'; // Ajusta esta ruta
import logo from '../../assets/images/DavidGoliatLogo.png'
import logoutIcon from '../../assets/icons/LogOut.png'; // Ajusta esta ruta

function Header() {
  return (
    <div className="Rectangle100">
      <div className="TopSection">
        <div className="DavidGoliat">
          <img src={logo} alt="Buscar" className="LogoImage" />
        </div>

        <div className="SearchBarWrapper">
          <div className="SearchBar">    
            <div className="StateLayer">
              <div className="Options">
                <div className="Clases">Clases</div>
                <div className="Planes">Planes</div>
                <div className="Rutina">Rutina</div>
                <div className="Productos">Productos</div>
              </div>
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
    </div>
  );
}

export default Header;