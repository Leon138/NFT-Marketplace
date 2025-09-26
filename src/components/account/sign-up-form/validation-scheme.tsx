import * as yup from 'yup';

const regexp = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  password: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,}$/,
};

export const validationShema = yup.object().shape({
  userName: yup
    .string()
    .matches(regexp.name, 'Enter user name from 2 to 20 characters')
    .required('Please enter user name'),
  email: yup
    .string()
    .matches(regexp.email, 'Email type example@mail.com')
    .required('Please Enter Email')
    .email('Please enter valid email'),
  password: yup
    .string()
    .matches(regexp.password, 'Please enter valid password length > 8')
    .required('Please enter password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match ')
    .required('Please confirm password'),
});
