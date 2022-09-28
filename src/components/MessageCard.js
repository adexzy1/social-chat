import avatar from '../assets/avatar.png';

const MessageCard = () => {
  return (
    <div className="pt-5 flex gap-3">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-lg" />
      <section className="text-sm">
        <p className="">John Doe</p>
        <div className="mt-3 py-2 pl-5 pr-2 bg-black-50 rounded-r-full rounded-bl-full">
          hey there in am new here i would love to meet you all
        </div>
      </section>
    </div>
  );
};

export default MessageCard;
