import { PropsWithChildren } from 'react';
import { FormTypes } from '../models/form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FlexProps extends PropsWithChildren {
  dir: 'col' | 'row';
  gap: number;
  wrap: boolean;
  align: React.CSSProperties['alignContent'];
  justify: React.CSSProperties['justifyContent'];
  style: React.CSSProperties;
  className: string;
}

export interface InputProps {
  label: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  fieldKey: keyof FormTypes;
  value?: string | number;
  error: FieldErrors<FormTypes>[InputProps['fieldKey']];
  register: UseFormRegister<FormTypes>;
  toggler?: JSX.Element;
}

export type RadioButtonProps = Omit<InputProps, 'toggler' | 'type' | 'error'>;

export type PasswordInputProps = Omit<InputProps, 'toggler' | 'type'>;
