import { createSlice } from '@reduxjs/toolkit';

const username = sessionStorage.getItem('username');
let messagesInLocalStorage = JSON.parse(localStorage.getItem('messages'));

const initialState = {
  messages: messagesInLocalStorage ? messagesInLocalStorage : [],
  userName: username ? username : '',
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      sessionStorage.setItem('username', payload);
      state.userName = payload;
    },

    saveMessages: (state, { payload }) => {
      const message = { name: state.userName, message: payload };
      state.messages = [...state.messages, message];
      localStorage.setItem('messages', JSON.stringify([...state.messages]));
    },

    updateMessages: (state, { payload }) => {
      const messages = JSON.parse(payload);
      state.messages = [...messages];
    },
  },
});

export const { setUserName, saveMessages, updateMessages } =
  messagesSlice.actions;
export default messagesSlice.reducer;
