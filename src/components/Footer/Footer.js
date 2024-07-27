import React from 'react';
import './Footer.css';
import logo from '../../assets/images/David&GoliatLogo.png';

function Footer() {
  return (
    <div className='espace'>
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Logo del gimnasio" className="footer-logo" />
          <hr className="footer-divider" />
          <div className="footer-section">
            <div className="footer-table">
              <div className="footer-table-cell">
                <h3>Misión</h3>
                <p>Nuestra misión es...</p>
              </div>
              <div className="footer-table-cell">
                <h3>Visión</h3>
                <p>Nuestra visión es...</p>
              </div>
              <div className="footer-table-cell">
                <h3>Sobre Nosotros</h3>
                <p>Información sobre nosotros...</p>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-links">
            <a href="/planes">Planes</a>
            <a href="/terminos">Términos y Condiciones</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/politicas">Políticas de Privacidad y Protección de Datos</a>
            <a href="/otros">Algo más</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
