import React from 'react';
import './kycInput.css';

const KycInput = ({ type, name, value, placeholder, handleField }) => {
  return (
    <div className="kycInput">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleField}
      />
    </div>
  );
};

export default KycInput;
