import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormTypes } from '../models/form';

const initialState: { formValues: FormTypes } = {
  formValues: {
    name: '',
    age: '' as unknown as number,
    email: '',
    password: '',
    confirmPassword: '',
    acceptTC: false,
    gender: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state: { formValues: FormTypes }, action: PayloadAction<FormTypes>) => {
      state.formValues = action.payload;
    },
  },
});

export const { setFormValues } = formSlice.actions;

const controlledFormReducer = formSlice.reducer;

export default controlledFormReducer;
