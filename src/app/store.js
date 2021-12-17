import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './../features/users/usersSlice';
import informationsReducer from './../features/information/informationsSlice';
import tasksReducer from './../features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    informations: informationsReducer,
    tasks: tasksReducer,
  },
});
