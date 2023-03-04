import React from 'react';
import CreatePost from './components/createPost';
import PostComment from './components/postComment';
import './posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts-inner">
        <CreatePost />
        <PostComment name="Andrea Rodríguez" />
        <PostComment name="José López" />
        <PostComment name="Andrés Pérez" />
      </div>
    </div>
  );
};

export default Posts;
