import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormTypes } from '../models/form';
import { INITIAL_FORM_VALUES } from '../components/Form/initialFormValues';

interface UncontrolledFormSlice {
  image: string;
  result: {
    formValues: FormTypes;
    image: string;
  };
}
const initialState: UncontrolledFormSlice = {
  image: '',
  result: {
    formValues: INITIAL_FORM_VALUES,
    image: '',
  },
};

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    submit: (state: UncontrolledFormSlice, action: PayloadAction<FormTypes>) => {
      state.result.formValues = action.payload;
      state.result.image = state.image;
      state.image = '';
    },
    setImage: (state: UncontrolledFormSlice, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { submit, setImage } = uncontrolledFormSlice.actions;

const uncontrolledForm = uncontrolledFormSlice.reducer;

export default uncontrolledForm;
