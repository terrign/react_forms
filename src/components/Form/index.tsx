import { FormState, UseFormRegister } from 'react-hook-form';
import { FormTypes } from '../../models/form';
import styles from './styles.module.css';
import useFlexStyles from '../../UI/Flex/useFlexStyles';
import PasswordInput from '../../UI/Input/withPasswordToggler';
import Input from '../../UI/Input';
import Flex from '../../UI/Flex';
import ImageUploader from '../ImageUploader';
import useFormValues from './useFormValues';

interface FormProps {
  formName: string;
  onChange?: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FormTypes>;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  formState: FormState<FormTypes>;
  isControlled?: boolean;
}

function Form(props: FormProps) {
  const { submitHandler, onChange, register, formName, formState, isControlled } = props;
  const { email, name, age, password, confirmPassword, acceptTC, gender } = useFormValues(isControlled);
  const { errors, isValid } = formState;
  const flex = useFlexStyles({ dir: 'col' });

  return (
    <form
      className={styles.form}
      name={formName}
      onSubmit={submitHandler}
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

      <span data-error={errors?.gender?.message}>
        <div style={{ justifySelf: 'flex-start' }}>Gender:</div>
        <label htmlFor="male">
          Male
          {!!gender && (
            <input type="radio" value="male" checked={gender === 'male'} id="male" {...register('gender')} />
          )}
          {!gender && <input type="radio" value="male" id="male" {...register('gender')} />}
        </label>

        <label htmlFor="female">
          Female
          {!!gender && (
            <input type="radio" value="female" checked={gender === 'female'} id="female" {...register('gender')} />
          )}
          {!gender && <input type="radio" value="female" id="female" {...register('gender')} />}
        </label>

        <label htmlFor="helicopter">
          Helicopter
          {!!gender && (
            <input
              type="radio"
              value="helicopter"
              checked={gender === 'helicopter'}
              id="helicopter"
              {...register('gender')}
            />
          )}
          {!gender && <input type="radio" value="helicopter" id="helicopter" {...register('gender')} />}
        </label>
      </span>

      <ImageUploader isControlled={isControlled ?? false} />

      <Flex justify="end" wrap={false}>
        <Flex justify="start" align="center">
          <label
            htmlFor="accept"
            style={{ width: 'auto' }}
            className={styles.terms}
            data-error={errors.acceptTC?.message}
          >
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
        {isControlled && <button disabled={!isValid}>Submit</button>}
        {!isControlled && <button>Submit</button>}
      </Flex>
    </form>
  );
}

export default Form;
