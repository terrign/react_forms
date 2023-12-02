export type Action = 'show' | 'hide';

export interface Reducer {
  (state: 'text' | 'password', action: Action): typeof state;
}

export interface PasswordTogglerProps {
  dispatch: React.Dispatch<Action>;
}
