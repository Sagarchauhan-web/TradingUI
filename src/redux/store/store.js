import { configureStore } from '@reduxjs/toolkit';
import pieReducer from '../slices/pieSlice';

export const store = configureStore({
  reducer: { pie: pieReducer },
});
