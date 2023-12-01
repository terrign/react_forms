import { combineReducers, configureStore } from '@reduxjs/toolkit';
import controlledFormReducer from './controlled.slice';

const reducer = combineReducers({
  controlledFormReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
