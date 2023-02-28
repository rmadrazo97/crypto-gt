import React from 'react';
import './blueCard.css';

const BlueCard = ({ title, image }) => {
  return (
    <div className="blueCard-wrapper">
      <img className="blueCard-image" src={image} alt="tokenswap" />
      <h1 className="blueCard-heading">{title}</h1>
      <p className="blueCard-text">
        Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
        debitis id. Ea error audiam alienum eos, an vel quas docendi disputando.
      </p>
    </div>
  );
};

export default BlueCard;
