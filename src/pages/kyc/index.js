import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import KycForm from './components/kycForm';
import KycText from './components/kycText';
import './kyc.css';

const KYC = () => {
  return (
    <div className="kyc">
      <Header />
      <KycText />
      <KycForm />
      <Footer />
    </div>
  );
};

export default KYC;
