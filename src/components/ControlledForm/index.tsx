import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import getFormValidationSchema from '../../util/getFormValidationSchema';

import { useAppDispatch } from '../../store/hooks';
import { setFormValues, submit } from '../../store/controlled.slice';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';

function ControlledForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = getFormValidationSchema();
  const { register, handleSubmit, getValues, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  const submitHandler = handleSubmit(() => {
    dispatch(submit());
    navigate('/');
  });

  const onChange = () => dispatch(setFormValues(getValues()));

  const formProps = { register, onChange, formState, submitHandler };

  return <Form formName="controlledForm" {...formProps} isControlled />;
}

export default ControlledForm;
