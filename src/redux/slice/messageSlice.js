import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
      name: 'John Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Michael Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Jane Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Erick Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Machela Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Machela Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Jane Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Machela Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Jane Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Machela Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Machela Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
    {
      name: 'Jane Doe',
      message: ' hey there in am new here i would love to meet you all',
    },
  ],
  userName: 'Jane Doe',
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setUserName } = messagesSlice.actions;
export default messagesSlice.reducer;
