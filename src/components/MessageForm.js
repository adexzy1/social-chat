import React from 'react';

const MessageForm = () => {
  return (
    <form className="fixed bottom-0 left-0 w-full bg-black py-2">
      <div className="mx-3 bg-black-light text-white flex rounded-md py-2 pr-3">
        <input
          type="text"
          className="bg-transparent flex-1 outline-none px-3"
        />
        <button className="bg-purple-500 p-2 px-4  rounded-md">send</button>
      </div>
    </form>
  );
};

export default MessageForm;
