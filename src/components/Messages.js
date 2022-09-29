import React, { useEffect, useState } from 'react';
import MessageCard from './MessageCard';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const Messages = () => {
  const { messages } = useSelector((state) => state.messages);
  const [page, setPage] = useState(1);
  const [paginatesMessages, setPaginatedMessages] = useState();

  const itemsPerPage = 25;
  const totalPages = Math.ceil(messages.length / itemsPerPage);
  const currentPage = page * itemsPerPage - itemsPerPage;

  useEffect(() => {
    const messagesArray = [...messages];
    const paginated_messages = messagesArray
      .reverse()
      .slice(0, itemsPerPage * page);

    setPaginatedMessages(paginated_messages);
  }, [messages, currentPage, page]);

  const fetchMore = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div
      id="scrollableDiv"
      className="text-white px-3 pt-20 pb-24 min-h-screen"
      style={{
        height: 300,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchMore}
        hasMore={page < totalPages}
        loader={<Loading />}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        inverse={true}
        scrollableTarget="scrollableDiv"
      >
        {paginatesMessages?.map((item, i) => (
          <MessageCard key={i} name={item.name} message={item.message} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Messages;
