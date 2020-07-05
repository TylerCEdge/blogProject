import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <div className='container'>
      <h1
        style={{ textAlign: 'center', marginTop: '3vh', marginBottom: '3vh' }}
      >
        Blog Post Microservice Project
      </h1>
      <hr />
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
