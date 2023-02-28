import React from 'react';
import './whiteCard.css';

const WhiteCard = ({ title, image }) => {
  return (
    <div className="whiteCard-wrapper">
      <img className="whiteCard-image" src={image} alt="tokenswap" />
      <h1 className="whiteCard-heading">{title}</h1>
      <p className="whiteCard-text">
        Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
        debitis id. Ea error audiam alienum eos, an vel quas docendi disputando.
      </p>
    </div>
  );
};

export default WhiteCard;
