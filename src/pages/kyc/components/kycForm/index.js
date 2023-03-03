import { Button } from '@material-ui/core';
import React from 'react';
import KycInput from './components/kycInput';
import UploadImage from './components/uploadFile';
import './kycForm.css';

const KycForm = () => {
  return (
    <div className="kycForm">
      <div className="inner">
        <KycInput placeholder="Nombres*" />
        <KycInput placeholder="Apellidos*" />
        <KycInput placeholder="Email*" />
        <KycInput placeholder="Número de teléfono*" />
        <KycInput placeholder="Género*" />
        <KycInput placeholder="Fecha de nacimiento*" />
        <KycInput placeholder="País de origen*" />
        <KycInput placeholder="Dirección*" />
        <KycInput placeholder="Código Postal*" />
        <KycInput placeholder="NIT*" />
        <KycInput placeholder="Origen o procedencia de los fondos*" />
        <KycInput placeholder="Rango Estimado*" />
        <p className="kycForm-txt1">
          Parámetros para la foto de tus documentos
        </p>
        <p className="kycForm-txt2">
          Foto o documento en PDF de DPI / Pasaporte Frontal
        </p>
        <UploadImage text="Choose File" />
        <p className="kycForm-txt2">
          Foto o documento en PDF de DPI / Pasaporte Trasera
        </p>
        <UploadImage text="Choose File" />
        <p className="kycForm-txt2">Foto sosteniendo tu DPI / Pasaporte</p>
        <UploadImage text="Choose File" />
        <div className="kycForm-enter-btn">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
