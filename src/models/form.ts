import { FieldValues } from 'react-hook-form';

export interface FormTypes extends FieldValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTC: boolean;
  gender: 'male' | 'female' | 'helicopter' | string;
  country?: string;
}
