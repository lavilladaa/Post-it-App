import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

const store = configureStore({
  reducer: {
    //   name of the reducer is note
    note: noteReducer,
  },
});

export default store;