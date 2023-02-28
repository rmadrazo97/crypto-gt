import React from 'react';
import './userInfoForm.css';

const UserInfoForm = () => {
  return (
    <div className="userInfoForm">
      <input className="userInfoForm-name" type="text" placeholder="Name" />
      <input className="userInfoForm-email" type="email" placeholder="Email" />
      <input
        className="userInfoForm-telephon"
        type="text"
        placeholder="Teléfono"
      />
      <button className="enviar-btn">Enviar</button>
    </div>
  );
};

export default UserInfoForm;
