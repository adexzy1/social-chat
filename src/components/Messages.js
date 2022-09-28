import React, { useEffect, useRef } from 'react';
import MessageCard from './MessageCard';
import { useSelector } from 'react-redux';

const Messages = () => {
  const { messages } = useSelector((state) => state.messages);
  const bottom = useRef(null);

  useEffect(() => {
    bottom.current.scrollIntoView({ behaviour: 'smooth' });
  }, []);

  return (
    <div className="text-white px-3 pt-20 pb-24 min-h-screen">
      {messages.map((item, i) => (
        <MessageCard key={i} name={item.name} message={item.message} />
      ))}
      <div ref={bottom}></div>
    </div>
  );
};

export default Messages;
