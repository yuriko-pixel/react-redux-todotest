import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/todoSlice';

export const store = configureStore({ reducer: rootReducer })
