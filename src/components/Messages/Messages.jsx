import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';



const Messages = (props) => {
  let messages = props.data.messages.map(message => <Message text={message.text} />)
  return (
    <div className={s.messages}>
      {messages}

      <textarea name="add" cols="30" rows="2"></textarea>
      <button>Send message</button>

    </div>
  )
}
export default Messages