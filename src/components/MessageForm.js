import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { saveMessages } from '../redux/slice/messageSlice';

const MessageForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveMessages(inputRef.current.value));
    inputRef.current.value = '';
  };

  return (
    <form
      className="fixed bottom-0 left-0 w-full bg-black py-2"
      onSubmit={handleSubmit}
    >
      <div className="mx-3 bg-black-light text-white flex rounded-md py-2 pr-3">
        <input
          required
          ref={inputRef}
          type="text"
          className="bg-transparent flex-1 outline-none px-3"
        />
        <button className="bg-purple-500 p-2 px-4  rounded-md">send</button>
      </div>
    </form>
  );
};

export default MessageForm;
