import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you' />
        <Post message="It's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;