/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set } from 'firebase/database';
import { ref as sRef } from 'firebase/storage';
import { app, storage } from '../../../../firebase';
import KycInput from './components/kycInput';
import UploadImage from './components/uploadFile';
import './kycForm.css';
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const db = getDatabase(app);

const KycForm = () => {
  const [progressFrontDPI, setProgressFrontDPI] = useState(0);
  const [progressBackDPI, setProgressBackDPI] = useState(0);
  const [progressHoldingDPI, setProgressHoldingDPI] = useState(0);
  const [kycData, setKycData] = useState({
    name: '',
    surName: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    country: '',
    address: '',
    postalCode: '',
    tin: '',
    sourseOfFunds: '',
    estimatedRange: '',
    frontDPI: '',
    backDPI: '',
    holdingDPI: '',
  });

  const handleField = (e) => {
    setKycData({ ...kycData, [e.target.name]: e.target.value });
  };
  const resetFields = () => {
    setProgressFrontDPI(0);
    setProgressBackDPI(0);
    setProgressHoldingDPI(0);
    setKycData({
      name: '',
      surName: '',
      email: '',
      phone: '',
      gender: '',
      birthDate: '',
      country: '',
      address: '',
      postalCode: '',
      tin: '',
      sourseOfFunds: '',
      estimatedRange: '',
      frontDPI: '',
      backDPI: '',
      holdingDPI: '',
    });
  };

  const sendEmail = () => {
    const emailContent = {
      user_name: kycData.name + kycData.surName,
      user_email: kycData.email,
      // user_name: 'Khurram',
      // user_email: 'khurramkiiman@gmail.com',
      subject: 'Thank you for your response',
      message: `Thank you ${kycData.name}. submission received succesfully`,
      // message: `Thank you Khurram. submission received succesfully`,
    };
    emailjs
      .send(
        'service_mhpk5ih',
        'template_p2n8nxn',
        emailContent,
        'vhtfp9nwvBze2w8iL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async () => {
    if (
      kycData.name !== '' &&
      kycData.surName !== '' &&
      kycData.email !== '' &&
      kycData.phone !== '' &&
      kycData.gender !== '' &&
      kycData.birthDate !== '' &&
      kycData.country !== '' &&
      kycData.address !== '' &&
      kycData.postalCode !== '' &&
      kycData.tin !== '' &&
      kycData.sourseOfFunds !== '' &&
      kycData.estimatedRange !== '' &&
      kycData.frontDPI !== '' &&
      kycData.backDPI !== '' &&
      kycData.holdingDPI !== ''
    ) {
      set(ref(db, 'kycs/' + uuidv4()), kycData);
      sendEmail();
      resetFields();
      alert('Kyc form submit successfully...!!!');
    } else {
      alert('Please fill all the fields');
    }
  };

  //handle the image uploading process
  const handleUploadClick = async (e, name) => {
    if (e.target.files.length < 1) return;
    const file = e.target.files[0];
    // change file name
    const myNewFile = new File([file], new Date().getTime() + file.name, {
      type: file.type,
    });
    const sotrageRef = sRef(storage, `kycs/${myNewFile.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, myNewFile);
    uploadTask?.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (name === 'frontDPI') {
          setProgressFrontDPI(prog);
        } else if (name === 'backDPI') {
          setProgressBackDPI(prog);
        } else if (name === 'holdingDPI') {
          setProgressHoldingDPI(prog);
        }
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setKycData({ ...kycData, [name]: downloadURL });
        });
      }
    );
  };
  //handle the image uploading process

  console.log('kycData', kycData);

  return (
    <div className="kycForm">
      <div className="inner">
        <KycInput
          type="text"
          name="name"
          value={kycData.name}
          handleField={handleField}
          placeholder="Nombres*"
        />
        <KycInput
          type="text"
          name="surName"
          value={kycData.surName}
          handleField={handleField}
          placeholder="Apellidos*"
        />
        <KycInput
          type="text"
          name="email"
          value={kycData.email}
          handleField={handleField}
          placeholder="Email*"
        />
        <KycInput
          type="text"
          name="phone"
          value={kycData.phone}
          handleField={handleField}
          placeholder="Número de teléfono*"
        />
        <KycInput
          type="text"
          name="gender"
          value={kycData.gender}
          handleField={handleField}
          placeholder="Género*"
        />
        <KycInput
          type="text"
          name="birthDate"
          value={kycData.birthDate}
          handleField={handleField}
          placeholder="Fecha de nacimiento*"
        />
        <KycInput
          type="text"
          name="country"
          value={kycData.country}
          handleField={handleField}
          placeholder="País de origen*"
        />
        <KycInput
          type="text"
          name="address"
          value={kycData.address}
          handleField={handleField}
          placeholder="Dirección*"
        />
        <KycInput
          type="text"
          name="postalCode"
          value={kycData.postalCode}
          handleField={handleField}
          placeholder="Código Postal*"
        />
        <KycInput
          type="text"
          name="tin"
          value={kycData.tin}
          handleField={handleField}
          placeholder="NIT*"
        />
        <KycInput
          type="text"
          name="sourseOfFunds"
          value={kycData.sourseOfFunds}
          handleField={handleField}
          placeholder="Origen o procedencia de los fondos*"
        />
        <KycInput
          type="text"
          name="estimatedRange"
          value={kycData.estimatedRange}
          handleField={handleField}
          placeholder="Rango Estimado*"
        />
        <p className="kycForm-txt1">
          Parámetros para la foto de tus documentos
        </p>
        <p className="kycForm-txt2">
          Foto o documento en PDF de DPI / Pasaporte Frontal
        </p>
        <UploadImage
          name="frontDPI"
          handleUploadClick={handleUploadClick}
          text="Choose File"
        />
        &nbsp; &nbsp; &nbsp;
        {progressFrontDPI > 0 ? (
          <span>
            Uploaded &nbsp;
            <span style={{ color: 'green' }}>{progressFrontDPI} %</span>
          </span>
        ) : null}
        &nbsp; &nbsp; &nbsp;
        {kycData.frontDPI && (
          <a href={kycData.frontDPI} target="_blank">
            Preview
          </a>
        )}
        <p className="kycForm-txt2">
          Foto o documento en PDF de DPI / Pasaporte Trasera
        </p>
        <UploadImage
          name="backDPI"
          handleUploadClick={handleUploadClick}
          text="Choose File"
        />
        &nbsp; &nbsp; &nbsp;
        {progressBackDPI > 0 ? (
          <span>
            Uploaded &nbsp;
            <span style={{ color: 'green' }}>{progressBackDPI} %</span>
          </span>
        ) : null}
        &nbsp; &nbsp; &nbsp;
        {kycData.backDPI && (
          <a href={kycData.backDPI} target="_blank">
            Preview
          </a>
        )}
        <p className="kycForm-txt2">Foto sosteniendo tu DPI / Pasaporte</p>
        <UploadImage
          name="holdingDPI"
          handleUploadClick={handleUploadClick}
          text="Choose File"
        />
        &nbsp; &nbsp; &nbsp;
        {progressHoldingDPI > 0 ? (
          <span>
            Uploaded &nbsp;
            <span style={{ color: 'green' }}>{progressHoldingDPI} %</span>
          </span>
        ) : null}
        &nbsp; &nbsp; &nbsp;
        {kycData.holdingDPI && (
          <a href={kycData.holdingDPI} target="_blank">
            Preview
          </a>
        )}
        <div className="kycForm-enter-btn">
          <button onClick={() => handleSubmit()}>Enviar</button>
          {/* <button onClick={() => sendEmail()}>Send</button> */}
        </div>
      </div>
    </div>
  );
};

export default KycForm;
