import * as yup from 'yup';

const regexp = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  password: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,}$/,
};

export const validationShema = yup.object().shape({
  email: yup
    .string()
    .matches(regexp.email, 'Email type example@mail.com')
    .required('Please Enter Email')
    .email('Please enter valid email'),
  password: yup
    .string()
    .matches(regexp.password, 'Please enter valid password length > 8')
    .required('Please enter password'),
});
