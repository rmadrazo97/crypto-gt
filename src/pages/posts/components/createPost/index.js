import { Divider } from '@mui/material';
import React from 'react';
import './createPost.css';

const CreatePost = () => {
  return (
    <div className="createPost">
      <div className="createPost-inner">
        <p>Post</p>
        <Divider className="only-mobile" />
        <div className="post-input-wrap">
          <div className="blue-dot" />
          <input type="text" placeholder="Escribe aquí tu comentario" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
