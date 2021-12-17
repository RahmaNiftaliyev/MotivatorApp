import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
  category: {},
  currentTask: {},
  tasks: [],
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (taskId) => {
    let url = 'http://localhost:3000/tasks';

    if (taskId) {
      url += '/?taskId=' + taskId;
    }

    let response = await fetch(url);
    return await response.json();
  },
);

export const addTask = createAsyncThunk('tasks/addTask', async (paramstask) => {
  let url = 'http://localhost:3000/tasks';

  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(paramstask),
    headers: { 'Content-Type': 'aplications/json' },
  });
  return await response.json();
});

const tasksSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchTasks.fullfilled]: (state, action) => {
        state.status = 'succeeded';
        state.tasks = state.tasks.concat(action.payload);
      },
      [addTask.pending]: (state, action) => {
        state.status = 'loading';
      },
      [addTask.fullfilled]: (state, action) => {
        state.status = 'succeeded';
        state.tasks.push(action.payload);
      },
      [addTask.rejected]: (state, action) => {
        state.status = 'failed';
      },
    },
  };
}

export const selectAllTasks = (state) => state.tasks.tasks;

export const selectTaskById = (state, categoryId) => {
  return state.tasks.tasks.find((t) => t.categoryId === categoryId);
};

export default tasksSlice.reducer;
