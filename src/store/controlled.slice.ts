import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormTypes } from '../models/form';
import { INITIAL_FORM_VALUES } from '../components/Form/initialFormValues';

interface ControlledFormSlice {
  formValues: FormTypes;
  image: string;
  prevResult: {
    formValues: FormTypes;
    image: string;
  };
}
const initialState: ControlledFormSlice = {
  formValues: INITIAL_FORM_VALUES,
  image: '',
  prevResult: {
    formValues: INITIAL_FORM_VALUES,
    image: '',
  },
};

export const controlledFormSlice = createSlice({
  name: 'controlledForm',
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
      state.formValues = INITIAL_FORM_VALUES;
      state.image = '';
    },
  },
});

export const { setFormValues, setImage, submit } = controlledFormSlice.actions;

const controlledForm = controlledFormSlice.reducer;

export default controlledForm;
