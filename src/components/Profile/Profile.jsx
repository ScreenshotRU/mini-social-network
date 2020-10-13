import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src='https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg'
          alt=''
        />
      </div>
      <div>ava+ descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
