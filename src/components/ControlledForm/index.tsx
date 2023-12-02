import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles.module.css';
import useFlexStyles from '../../UI/Flex/useFlexStyles';
import Flex from '../../UI/Flex';
import getFormValidationSchema from '../../util/getFormValidationSchema';
import Input from '../../UI/Input';
import { FormTypes } from '../../models/form';
import PasswordInput from '../../UI/Input/withPasswordToggler';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFormValues, submit } from '../../store/controlled.slice';
import ImageUploader from '../ImageUploader';
import { useNavigate } from 'react-router-dom';

function ControlledForm() {
  const flex = useFlexStyles({ dir: 'col' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { email, name, age, password, confirmPassword, acceptTC } = useAppSelector(
    (state) => state.controlledFormReducer.formValues
  );
  const schema = getFormValidationSchema();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema), shouldUnregister: true });

  const onSubmit: SubmitHandler<FormTypes> = () => {
    dispatch(submit());
    reset();
    navigate('/');
  };

  const onChange = () => dispatch(setFormValues(getValues()));

  return (
    <form
      className={styles.form}
      name="controlledForm"
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
      style={{ ...flex, rowGap: 24 }}
    >
      <Input label="Email" type="email" fieldKey="email" error={errors.email} register={register} value={email} />

      <Input label="Name" type="text" fieldKey="name" error={errors.name} register={register} value={name} />

      <Input label="Age" type="number" fieldKey="age" error={errors.age} register={register} value={age} />

      <PasswordInput
        label="Password"
        fieldKey="password"
        error={errors.password}
        register={register}
        value={password}
      />

      <PasswordInput
        label="Confirm password"
        fieldKey="confirmPassword"
        error={errors.confirmPassword}
        register={register}
        value={confirmPassword}
      />

      <fieldset className={styles.fieldset}>
        <legend style={{ width: 'auto' }}>Gender:</legend>
        <Flex wrap={false} justify="space-evenly" className={styles.radioGroup}>
          <label htmlFor="male">
            Male
            <input type="radio" value="male" id="male" {...register('gender')} />
          </label>

          <label htmlFor="female">
            Female
            <input type="radio" value="female" id="female" {...register('gender')} />
          </label>

          <label htmlFor="helicopter">
            Helicopter
            <input type="radio" value="helicopter" id="helicopter" {...register('gender')} />
          </label>
        </Flex>
      </fieldset>

      <ImageUploader />

      <select autoComplete="on">
        <option value="USA">USA</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Albania">Albania</option>
        <option value="Canada">Canada</option>
      </select>

      <Flex justify="end" wrap={false}>
        <Flex justify="start" align="center" data-error={errors.acceptTC?.message}>
          <label htmlFor="accept" style={{ width: 'auto' }}>
            Accept Terms & Conditions:
          </label>
          <input
            id="accept"
            type="checkbox"
            checked={acceptTC}
            {...register('acceptTC')}
            style={{ display: 'inline', width: 30, height: 30 }}
          />
        </Flex>
        <button disabled={!isValid}>Submit</button>
      </Flex>
    </form>
  );
}

export default ControlledForm;
