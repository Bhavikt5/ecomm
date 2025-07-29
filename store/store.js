import { configureStore } from '@reduxjs/toolkit';
import someReducer from './productslice';

export const store = configureStore({
  reducer: {
    product: someReducer,
  },
});
