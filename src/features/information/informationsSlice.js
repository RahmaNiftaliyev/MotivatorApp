import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
   status: 'idle',
   error: null,
   currentInformation:{} ,
   informations: []
}



const informationsSlice = createSlice(sliceInvoker());



function sliceInvoker() {
  return {
    name: 'informations',
    initialState,
    reducers: {},
    extraReducers:{}
  }
}




export const selectAllInformations = state =>
  state.informations.informations;

export const selectInformationById = (state, userId) => {
  return state.informations.informations.find(i => i.id === userId)
}

export default informationsSlice.reducer