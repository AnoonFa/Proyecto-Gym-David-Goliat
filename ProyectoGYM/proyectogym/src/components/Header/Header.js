// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import searchIcon from '../../assets/icons/SearchIcon.png'; // Ajusta esta ruta
import logoutIcon from '../../assets/icons/LogOut.png'; // Ajusta esta ruta

//import logInIcon from './path/to/logoutIcon.png'; // Ruta de tu ícono de logout

function Header() {
  return (
    <div className="Rectangle100">
      <div className="TopSection">
        <div className="Group17">
          <div className="Gimnasio">GIMNASIO</div>
          <div className="DavidGoliat">David & Goliat</div>
        </div>
        <div className="SearchBarWrapper">
          <div className="SearchBar">
            <div className="StateLayer">
              <div className="LeadingIcon">
                <img src={searchIcon} alt="Buscar" className="IconImage" />
              </div>
              <div className="Content">
                <div className="SupportingText">Buscar Productos</div>
              </div>
              <div className="TrailingElements">
                <div className="StTrailingIcon">
                  <img src={searchIcon} alt="Buscar" className="IconImage" />
                </div>
              </div>
            </div>
          </div>
          <div className="LogOut">
            <img src={logoutIcon} alt="LogOut" className="IconImage" />
          </div>
        </div>
      </div>
      <div className="OptionsWrapper">
        <div className="Options">
          <div className="Clases">Clases</div>
          <div className="Planes">Planes</div>
          <div className="Rutina">Rutina</div>
          <div className="Productos">Productos</div>
        </div>
      </div>
    </div>
  );
}

export default Header;