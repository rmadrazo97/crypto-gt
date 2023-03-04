import React from 'react';
import threedots from '../../../../assets/images/threedots.svg';
import './postComment.css';

const PostComment = ({ name }) => {
  return (
    <div className="postComment">
      <div className="postComment-inner">
        <div className="postComment-top-line">
          <div className="postComment-user-name">
            <div className="postComment-user-blue-dot" />
            <h1>
              {name}
              <br />
              <span>20 de Abril de 2023 9:30 P.M</span>
            </h1>
          </div>
          <img src={threedots} alt="threedots" />
        </div>
        <div className="postCommert-comment">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="postComment-rightComment">
          <div className="rightComment-dot" />
          <input type="text" placeholder="Write your comment…" />
        </div>
      </div>
    </div>
  );
};

export default PostComment;
