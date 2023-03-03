import React from 'react';
import { Button } from '@material-ui/core';
import './uploadFile.css';

const UploadImage = ({ text, handleUploadClick, imageInputRef }) => {
  return (
    <Button variant="contained" component="label" className="upload-file1">
      {text}
      <input
        accept="image/*"
        name="img"
        type="file"
        multiple
        onChange={handleUploadClick}
        ref={imageInputRef}
        hidden
      />
    </Button>
  );
};

export default UploadImage;
