import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png'
        alt=''
      />
      {props.message}
      <div>
        <span>like </span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
