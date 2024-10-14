import React from 'react';

const Message = ({ message }) => {
  const { text, sender } = message;

  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;