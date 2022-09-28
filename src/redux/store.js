import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slice/messageSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
