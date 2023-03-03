import React from 'react';
import './kycInput.css';

const KycInput = ({ type, name, value, placeholder }) => {
  return (
    <div className="kycInput">
      <input type={type} name={name} value={value} placeholder={placeholder} />
    </div>
  );
};

export default KycInput;
