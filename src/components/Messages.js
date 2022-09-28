import React from 'react';
import MessageCard from './MessageCard';
import { useSelector } from 'react-redux';

const Messages = () => {
  const { messages } = useSelector((state) => state.messages);

  return (
    <div className="text-white px-3 pt-20 pb-24">
      {messages.map((item, i) => (
        <MessageCard key={i} name={item.name} message={item.message} />
      ))}
    </div>
  );
};

export default Messages;
