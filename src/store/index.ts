import { combineReducers, configureStore } from '@reduxjs/toolkit';
import controlledForm from './controlled.slice';
import uncontrolledForm from './uncontrolled.slice';

const reducer = combineReducers({
  controlledForm,
  uncontrolledForm,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
