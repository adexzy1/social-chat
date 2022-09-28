import { useState } from 'react';
import { useDispatch } from 'react-redux';

const WelcomeScreen = ({ setUserName }) => {
  const [username, setUsername] = useState();
  const dispatch = useDispatch();

  const handleUserName = () => {
    dispatch(setUserName(username));
  };
  return (
    <div className="bg-black w-full fixed h-screen z-10 flex flex-col px-5 items-center justify-center text-white">
      <h1 className="text-purple-500 text-2xl font-semibold pb-5">
        Welcome To Love Hub
      </h1>
      <input
        type="text"
        placeholder="Enter your Username"
        className="bg-black-50 p-2 rounded w-[20rem] outline-none"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="bg-purple-500 p-2 w-[9rem] mt-5 rounded hover:bg-purple-800">
        Enter Chat
      </button>
    </div>
  );
};

export default WelcomeScreen;
