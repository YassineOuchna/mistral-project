import React, { useState } from 'react';
import { sendMessage } from '../services/chatService';
import Message from './Message';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: 'user', timestamp: new Date() };
    setMessages([...messages, newMessage]);

    const response = await sendMessage(input);
    setMessages([...messages, newMessage, { text: response, sender: 'bot', timestamp: new Date() }]);

    setInput('');
  };

  return (
    <div className="chatbox-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;