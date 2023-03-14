import React from 'react';
import { Link } from 'react-router-dom';
import socialIcon1 from '../../assets/images/socialIcon1.svg';
import socialIcon2 from '../../assets/images/socialIcon2.svg';
import socialIcon3 from '../../assets/images/socialIcon3.svg';
import socialIcon4 from '../../assets/images/socialIcon4.svg';
import socialIcon5 from '../../assets/images/socialIcon5.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div>
          <h1 className="footer-logo">
            <span>COMPANY</span> LOGO
          </h1>
          <p className="footer-text1">
            Seguridad y confianza en todas tus transacciones
          </p>
          <p className="footer-text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
          <div className="footer-socialIcons">
            <div className="footer-socialIcon">
              <img src={socialIcon1} alt="socialIcon1" />
            </div>
            <div className="footer-socialIcon">
              <img src={socialIcon2} alt="socialIcon2" />
            </div>
            <img src={socialIcon3} alt="socialIcon3" />
            <div className="footer-socialIcon">
              <img src={socialIcon4} alt="socialIcon4" />
            </div>
            <div className="footer-socialIcon">
              <img src={socialIcon5} alt="socialIcon5" />
            </div>
          </div>
        </div>
        <div className="spacer154" />
        <div>
          <h2 className="footer-nav-h">Navegación</h2>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/formulario">Formulario</Link>
            </li>
            <li>
              <Link to="/comunidad">Comprar y Vender</Link>
            </li>
            <li>
              <Link to="/términos-y-políticas">Acerca De</Link>
            </li>
          </ul>
        </div>
        <div className="spacer113" />
        <div>
          <h2 className="footer-contacts-h">Contáctanos</h2>
          <div className="footer-contact-info">
            <p>hello@email.com</p>
            <p>+123 4567 8910</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
