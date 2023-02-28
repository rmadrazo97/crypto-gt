import React from 'react';
import setofcryptocu from '../../../../assets/images/setofcryptocu.png';
import rightarrow from '../../../../assets/images/rightarrow.svg';
import './homeBanner.css';

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="left-text">
        <p className="homeBanner-text-h">Invierte con nosotros</p>
        <p className="homeBanner-text">
          Seguridad y confianza en todas tus transacciones
        </p>
        <button className="comprar-btn">
          Comprar <img src={rightarrow} alt="rightarrow" />
        </button>
      </div>
      <img className="rightimg" src={setofcryptocu} alt="setofcryptocu" />
    </div>
  );
};

export default HomeBanner;
