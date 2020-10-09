import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img
          src='http://cdn.onlinewebfonts.com/svg/download_504356.png'
          alt=''
        />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img
            src='https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg'
            alt=''
          />
        </div>
        <div>ava+ descr</div>
        <div>
          My posts
          <div>New post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
