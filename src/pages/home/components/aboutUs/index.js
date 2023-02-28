import React from 'react';
import aboutusImg from '../../../../assets/images/aboutusImg.png';
import aboutUsImgpc from '../../../../assets/images/aboutUsImgpc.png';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-pc">
        <img className="aboutusImgMobile" src={aboutUsImgpc} alt="aboutusImg" />
        <div>
          <p className="aboutUs-text1">Sobre nosotros</p>
          <p className="aboutUs-text2">
            Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
            debitis id. Ea error audiam alienum eos, an vel quas docendi
            disputando.
          </p>
        </div>
      </div>
      <div className="aboutUs-mobile">
        <p className="aboutUs-text1">Sobre nosotros</p>
        <p className="aboutUs-text2">
          Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
          debitis id. Ea error audiam alienum eos, an vel quas docendi
          disputando.
        </p>
        <img className="aboutusImgMobile" src={aboutusImg} alt="aboutusImg" />
      </div>
    </div>
  );
};

export default AboutUs;
