import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';
import WelcomeScreen from './components/WelcomeScreen';
import { updateMessages } from './redux/slice/messageSlice';

const App = () => {
  const { userName } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handlelocalStorageChange = (e) => {
    dispatch(updateMessages(e.newValue));
  };

  window.addEventListener('storage', handlelocalStorageChange);

  return (
    <div className="bg-black min-h-screen">
      {!userName && <WelcomeScreen />}
      <Header />
      <Messages />
      <MessageForm />
    </div>
  );
};

export default App;
