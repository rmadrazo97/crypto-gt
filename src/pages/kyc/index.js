import React from 'react';
import KycForm from './components/kycForm';
import KycText from './components/kycText';
import './kyc.css';

const KYC = () => {
  return (
    <div className="kyc">
      <KycText />
      <KycForm />
    </div>
  );
};

export default KYC;
