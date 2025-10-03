import { Form, Formik } from 'formik';
import { Input } from '../../../shared/ui/input/input';
import { Link } from 'react-router-dom';
import { validationShema } from './validation-scheme';

interface IInitialValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const initialValues: IInitialValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <>
      <h1 className="mb-5 text-[51px] font-semibold">Create Account</h1>
      <p className="mb-10 text-[22px] font-normal">
        Welcome! Enter Your Details And Start <br /> Creating, Collecting And
        Selling NFTs.
      </p>
      <div className="w-82.5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={(values: IInitialValues) => console.log(values)}>
          <Form>
            <Input
              id="userName"
              name="userName"
              type="text"
              autoComplete="off"
              placeholder="Username"
            />
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              autoComplete="off"
            />
            <Input
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="off"
            />
            <button
              type="submit"
              className="h-11.5 w-82.5 mb-4 cursor-pointer rounded-[20px] bg-purple font-semibold">
              Create account
            </button>
            <div className="flex justify-center font-work font-semibold">
              <p>Already registered!</p>
              <Link className="ml-2.5 text-purple" to={'/sign-in'}>
                Sign in
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
