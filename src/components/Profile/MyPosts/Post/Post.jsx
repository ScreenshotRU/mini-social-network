import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src='https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png'
        alt=''
      />
      post
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
