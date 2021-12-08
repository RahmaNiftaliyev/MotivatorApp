import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './../features/users/usersSlice';
import informationsReducer from './../features/information/informationsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    informations: informationsReducer,
  },
});
