import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../assets/avatar.png';

const MessageCard = forwardRef(({ name, message }, ref) => {
  const { userName } = useSelector((state) => state.messages);
  const isUserMessage = userName === name;

  return (
    <div
      className={`pt-5 flex gap-3 ${
        isUserMessage && 'flex-nowrap flex-row-reverse'
      }`}
      ref={ref}
    >
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-lg" />
      <section className="text-sm">
        <p className={isUserMessage ? 'text-right' : 'text-left'}>
          {isUserMessage ? 'You' : name}
        </p>
        <div
          className={`mt-2 py-2 px-5 bg-black-50  ${
            isUserMessage
              ? 'rounded-l-full rounded-br-full bg-purple-500'
              : 'rounded-r-full rounded-bl-full'
          }`}
        >
          {message}
        </div>
      </section>
    </div>
  );
});

export default MessageCard;
