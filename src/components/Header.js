import LoveImg from '../assets/love.png';

const Header = () => {
  return (
    <header className="bg-black border-b border-purple-500 flex text-white items-center p-3 gap-2 fixed w-full">
      <img
        src={LoveImg}
        alt="avatar"
        className="object-cover rounded-full w-10 h-10"
      />
      <p>Love Hub</p>
    </header>
  );
};

export default Header;
