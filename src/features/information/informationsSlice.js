import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  currentInformation: {},
  informations: [],
};

export const fetchInformations = createAsyncThunk(
  'informations/fetchInformations',
  async (userId) => {
    let url = 'http://localhost:3000/informations';
    if (userId) {
      url += '/?userId=' + userId;
    }

    let response = await fetch(url);
    return await response.json();
  },
);

export const addInformation = createAsyncThunk(
  'informations/addInformation',
  async (paramsInformation) => {
    let url = 'http://localhost:3000/informations';
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(paramsInformation),
      headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
  },
);


const informationsSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: 'informations',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchInformations.pending]: (state, action) => {
        state.status = 'loading';
      },
      [fetchInformations.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.informations = state.informations.concat(action.payload);
      },
      [fetchInformations.rejected]: (state, action) => {
        state.status = 'failed';
      },
    },
  };
}

export const selectAllInformations = (state) => state.informations.informations;

export const selectInformationById = (state, userId) => {
  return state.informations.informations.find((i) => i.id === userId);
};

export default informationsSlice.reducer;
