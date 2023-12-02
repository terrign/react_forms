import { useAppSelector } from '../../store/hooks';

const useFormValues = (isControlled?: boolean) => {
  const values = useAppSelector((state) => state.controlledForm.formValues);
  if (isControlled) {
    return values;
  }
  return {
    email: undefined,
    name: undefined,
    age: undefined,
    password: undefined,
    confirmPassword: undefined,
    acceptTC: undefined,
    gender: undefined,
  };
};

export default useFormValues;
