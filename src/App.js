import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  const { userName } = useSelector((state) => state.messages);

  return (
    <div className="m-h-screen bg-black max-w-md">
      {!userName && <WelcomeScreen />}
      <Header />
      <Messages />
      <MessageForm />
    </div>
  );
};

export default App;
