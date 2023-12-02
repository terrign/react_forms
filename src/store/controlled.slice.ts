import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormTypes } from '../models/form';

interface ControlledFormSlice {
  formValues: FormTypes;
  image: string;
  prevResult: {
    formValues: FormTypes;
    image: string;
  };
}

const initialState: ControlledFormSlice = {
  formValues: {
    name: '',
    age: '' as unknown as number,
    email: '',
    password: '',
    confirmPassword: '',
    acceptTC: false,
    gender: '',
  },
  image: '',
  prevResult: {
    formValues: {
      name: '',
      age: '' as unknown as number,
      email: '',
      password: '',
      confirmPassword: '',
      acceptTC: false,
      gender: '',
    },
    image: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state: ControlledFormSlice, action: PayloadAction<FormTypes>) => {
      state.formValues = action.payload;
    },
    setImage: (state: ControlledFormSlice, action: PayloadAction<FormTypes['image']>) => {
      state.image = action.payload as string;
    },
    submit: (state: ControlledFormSlice) => {
      state.prevResult.formValues = state.formValues;
      state.prevResult.image = state.image;
      state.formValues = initialState.formValues;
      state.image = '';
    },
  },
});

export const { setFormValues, setImage, submit } = formSlice.actions;

const controlledFormReducer = formSlice.reducer;

export default controlledFormReducer;
