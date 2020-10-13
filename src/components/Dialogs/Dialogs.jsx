import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Dima' id='1' />
        <DialogItem name='Sasha' id='2' />
        <DialogItem name='Sveta' id='3' />
        <DialogItem name='Valera' id='4' />
        <DialogItem name='Roma' id='5' />
        <DialogItem name='Fedya' id='6' />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='no' />
        <Message message='yes' />
        <Message message='do' />
        <Message message='homework' />
        <Message message='I am' />
      </div>
    </div>
  );
};

export default Dialogs;
