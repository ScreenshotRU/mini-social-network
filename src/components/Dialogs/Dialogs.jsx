import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Dima</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog}>Roma</div>
        <div className={s.dialog}>Fedya</div>
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
