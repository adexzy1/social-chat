import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Header />
      <Messages />
      <MessageForm />
    </div>
  );
};

export default App;
