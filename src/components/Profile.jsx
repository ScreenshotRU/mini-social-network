import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src='https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg'
          alt=''
        />
      </div>
      <div>ava+ descr</div>
      <div>
        My posts
        <div className={s.item}>New post</div>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
