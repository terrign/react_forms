import { useId } from 'react';
import Flex from '../Flex';
import { InputProps } from '../types';

function Input({ label, type, error, fieldKey, register, toggler, value }: InputProps) {
  const id = useId();
  return (
    <Flex justify="end" wrap>
      <label htmlFor={id}>{label}:</label>
      <span data-error={error?.message}>
        <input {...register(fieldKey as string)} type={type} id={id} value={value} />
        {toggler}
      </span>
    </Flex>
  );
}

export default Input;
