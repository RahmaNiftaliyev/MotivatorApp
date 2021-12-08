import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  activeUser: {},
  users: [],
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (urlEncoder) => {
    let url, response;

    url = urlEncoder
      ? 'http://localhost:3000/users' + '/?userId=' + urlEncoder
      : 'http://localhost:3000/users';

    response = await fetch(url);

    return await response.json();
  },
);

export const addUsers = createAsyncThunk(
  'users/addUsers',
  async (paramsUser) => {
    let url, response;

    url = 'http://localhost:3000/users';
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(paramsUser),
      headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
  },
);

const usersSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchUsers.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.concat(action.payload);
      },
      [addUsers.pending]: (state, action) => {
        state.status = 'loading';
      },
      [addUsers.fullfilled]: (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.concat(action.payload);
      },
      [addUsers.rejected]: (state, action) => {
        state.status = 'rejected';
      },
    },
  };
}

export const selectAllUsers = (state) => state.users.users;

export const selectUserByUsername = (state, username) => {
  return {
    user: state.users.users.find((u) => u.username === username),
    userController: username ? true : false ,
  };
};

export default usersSlice.reducer;
