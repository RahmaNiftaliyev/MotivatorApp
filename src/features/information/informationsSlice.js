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




export default informationsSlice.reducer