import * as yup from 'yup';

const getFormValidationSchema = () =>
  yup.object().shape({
    email: yup.string().email('Email must be a valid email').required('This field is required'),
    name: yup
      .string()
      .required('Please enter your name')
      .test({
        name: 'First-letter-upper-case',
        test: (value) => {
          if (!value[0]) return true;
          return value[0].toUpperCase() === value[0];
        },
        message: 'First letter must be uppercase',
      })
      .matches(/^[a-zA-ZА-Яa-я']+$/, 'Name can not contain special characters or numbers'),
    age: yup
      .number()
      .typeError('Please enter your age')
      .min(16, 'You must be atleast 16 y.o.')
      .max(120, 'Are you that old?')
      .integer('Age must be an integer')
      .required(),
    password: yup
      .string()
      .min(8, 'Password must contain atleast 8 symbols')
      .max(32, 'The password must not contain more than 32 characters')
      .matches(
        /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[\W_~!@#$%^&*+]).{8,}$/,
        'Password must contain 1 special character, 1 number, 1 uppercase and 1 lowercase letter'
      )
      .required(),
    confirmPassword: yup
      .string()
      .test('passwords-match', "Passwords don't match", function (value) {
        return this.parent.password === value;
      })
      .required(),
    acceptTC: yup
      .boolean()
      .test({
        name: 'Must-be-true',
        test: (value) => value,
        message: '',
      })
      .required(),
    gender: yup.string().required('Please specify your gender'),
  });

export default getFormValidationSchema;
