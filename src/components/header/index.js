import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bars from '../../assets/images/bars.svg';
import socialIcon1 from '../../assets/images/socialIcon1.svg';
import socialIcon2 from '../../assets/images/socialIcon2.svg';
import socialIcon3 from '../../assets/images/socialIcon3.svg';
import socialIcon4 from '../../assets/images/socialIcon4.svg';
import socialIcon5 from '../../assets/images/socialIcon5.svg';
import './header.css';

const Header = () => {
  return (
    <div className="page-header">
      <div className="movile-header">
        <h1 className="logo">
          <span>COMPANY</span> LOGO
        </h1>
        <ul className="page-header-links">
          <Link to="/">
            <li className="active">Home</li>
          </Link>
          <Link to="/formulario">
            <li>Formulario</li>
          </Link>
          <Link to="/">
            <li>Comunidad</li>
          </Link>
          <Link to="/">
            <li>Términos y Políticas</li>
          </Link>
        </ul>
        <div className="page-header-socialIcons">
          <div className="page-header-socialIcon">
            <img src={socialIcon1} alt="socialIcon1" />
          </div>
          <div className="page-header-socialIcon">
            <img src={socialIcon2} alt="socialIcon2" />
          </div>
          <img src={socialIcon3} alt="socialIcon3" />
          <div className="page-header-socialIcon">
            <img src={socialIcon4} alt="socialIcon4" />
          </div>
          <div className="page-header-socialIcon">
            <img src={socialIcon5} alt="socialIcon5" />
          </div>
        </div>
        <div className="page-header-humbarger">
          <img className="bars" src={bars} alt="bars" />
        </div>
      </div>
    </div>
  );
};

export default Header;
