import React from 'react';

function Message({ text, sender }) {
  return (
    <div
      className={`message ${sender === "user" ? "user-message" : "bot-message"}`}
      dangerouslySetInnerHTML={{ __html: text }} // Render rich text
    />
  );
}

export default Message;