import { useReducer } from 'react';
import PasswordToggler from './passwordToggler';
import { Action, Reducer } from '../../models/passwordToggler';

const reducer: Reducer = (_, action: Action) => (action === 'show' ? 'text' : 'password');

const usePasswordToggler = (): ['text' | 'password', JSX.Element] => {
  const [passwordType, dispatch] = useReducer<Reducer>(reducer, 'password');

  return [passwordType, <PasswordToggler dispatch={dispatch} />];
};

export default usePasswordToggler;
