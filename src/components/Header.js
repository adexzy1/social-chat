import chatImg from '../assets/johndoe.jpeg';

const Header = () => {
  return (
    <header className="bg-black-light border-b border-purple-500 flex text-white items-center p-3 gap-2">
      <div className="w-12 rounded-full overflow-hidden">
        <img src={chatImg} alt="avatar" className="w-full" />
      </div>
      <p>John Doe</p>
    </header>
  );
};

export default Header;
