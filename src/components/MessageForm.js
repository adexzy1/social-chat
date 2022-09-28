import React from 'react';

const MessageForm = () => {
  return (
    <form className="fixed bottom-0 bg-black-light w-[80%] mx-auto border-purple-500 border-t text-white h-12">
      <div>
        <input type="text" className="bg-transparent" />
        <button>send</button>
      </div>
    </form>
  );
};

export default MessageForm;
