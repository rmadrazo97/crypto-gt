import React from 'react';
import WhiteCard from '../whiteCard';
import tokenswap from '../../../../assets/images/tokenswap.svg';
import peerToPeer from '../../../../assets/images/peerToPeer.svg';
import transactionFee from '../../../../assets/images/transactionFee.svg';
import './cards.css';
import BlueCard from '../blueCard';

const Cards = () => {
  return (
    <div className="cards-w">
      <WhiteCard title="Compra" image={tokenswap} />
      <div className="pc-spacer40" />
      <WhiteCard title="Venta" image={peerToPeer} />
      <div className="pc-spacer40" />
      <BlueCard title="Trade" image={transactionFee} />
    </div>
  );
};

export default Cards;
