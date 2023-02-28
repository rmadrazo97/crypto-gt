import React from 'react';
import empizaimg1 from '../../../../assets/images/empizaimg1.png';
import empizaimg2 from '../../../../assets/images/empizaimg2.png';
import rightarrow from '../../../../assets/images/rightarrow.svg';
import './empizaComprar.css';

const EmpizaComprar = () => {
  return (
    <div className="empizaComprar-wrapper">
      <div className="empieza-txt-box">
        <div>
          <p className="empizaComprar-txt1">Empieza tu viaje Crypto</p>
          <p className="empizaComprar-txt2">
            ¿Quieres invertir en criptomonedas pero no sabes por dónde empezar?
            ¡Tenemos la solución perfecta para ti!
          </p>
          <button className="empizaComprar-btn">
            Empieza a comprar y vender hoy
            <img src={rightarrow} alt="rightarrow" />
          </button>
        </div>
      </div>
      <img className="empizaimg1img" src={empizaimg1} alt="empizaimg1" />
      <img className="empizaimg2img" src={empizaimg2} alt="empizaimg2" />
    </div>
  );
};

export default EmpizaComprar;
