import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Roma' },
    { id: 6, name: 'Fedya' },
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'no' },
    { id: 3, message: 'yes' },
    { id: 4, message: 'do' },
    { id: 5, message: 'homework' },
    { id: 6, message: 'I am' },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
