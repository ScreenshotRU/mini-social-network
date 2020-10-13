import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Valera</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Roma</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/6'>Fedya</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>no</div>
        <div className={s.message}>yes</div>
        <div className={s.message}>do</div>
        <div className={s.message}>homework</div>
        <div className={s.message}>I am</div>
      </div>
    </div>
  );
};

export default Dialogs;
