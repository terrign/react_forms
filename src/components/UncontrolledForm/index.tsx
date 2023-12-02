import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import getFormValidationSchema from '../../util/getFormValidationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store/hooks';
import { submit } from '../../store/uncontrolled.slice';

function UncontrolledForm() {
  const navigate = useNavigate();
  const schema = getFormValidationSchema();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  const submitHandler = handleSubmit((data) => {
    dispatch(submit(data));
    navigate('/');
  });

  const formProps = { register, formState, submitHandler };

  return <Form formName="uncontrolledForm" {...formProps} isControlled={false} />;
}

export default UncontrolledForm;
