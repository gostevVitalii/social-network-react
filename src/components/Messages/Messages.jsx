import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import { newMessageCreator, updateNewMessageTextCreator } from '../../redux/state';


const Messages = (props) => {
  let messages = props.dialogsData.messages.map(message => <Message text={message.text} />)
  let newMessage = () => {
    props.dispatch(newMessageCreator())
  }
  let onMessageChange = (e) => {
    let text = e.target.value
    props.dispatch(updateNewMessageTextCreator(text))
  }
  return (
    <div className={s.messages}>
      {messages}

      <textarea
        value={props.dialogsData.newMessage}
        onChange={onMessageChange}
      />
      <button onClick={newMessage}>Send message</button>

    </div>
  )
}
export default Messages