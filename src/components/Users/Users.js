import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://www.clipartmax.com/png/full/97-978328_avatar-icon-free-fa-user-circle-o.png',
        followed: false,
        fullName: 'Fedor',
        status: 'I am a boss',
        location: { city: 'Krasnoyarsk', country: 'Russia' },
      },
      {
        id: 2,
        photoUrl:
          'https://www.clipartmax.com/png/full/97-978328_avatar-icon-free-fa-user-circle-o.png',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a boss, maybe',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://www.clipartmax.com/png/full/97-978328_avatar-icon-free-fa-user-circle-o.png',
        followed: false,
        fullName: 'Dasha',
        status: 'I am a boss too',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 4,
        photoUrl:
          'https://www.clipartmax.com/png/full/97-978328_avatar-icon-free-fa-user-circle-o.png',
        followed: true,
        fullName: 'Natasha',
        status: 'I am a boss, but mini',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={styles.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
