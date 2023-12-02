import Input from '.';
import usePasswordToggler from '../PasswordToggler/usePasswordToggler';
import { PasswordInputProps } from '../types';

const WithPasswordToggler = (Component: typeof Input) => {
  const WithPasswordToggler = (props: PasswordInputProps) => {
    const [passwordType, PasswordToggler] = usePasswordToggler();
    const newProps = { ...props, type: passwordType, toggler: PasswordToggler };
    return <Component {...newProps} />;
  };
  WithPasswordToggler.displayName = 'PasswordInput';
  return WithPasswordToggler;
};

const PasswordInput = WithPasswordToggler(Input);

export default PasswordInput;
