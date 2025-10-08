import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Input } from '@/shared/ui/input/input';
import { validationShema } from './validation-scheme';

interface IInitialValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const initialValues: IInitialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <h1 className="mb-5 text-[51px] font-semibold">Sign In</h1>
      <p className="mb-10 text-[22px] font-normal">
        Welcome back! Please enter your credentials.
      </p>
      <div className="w-82.5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={values => console.log(values)}>
          <Form>
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
              placeholder="Password"
              autoComplete="off"
            />
            <button
              type="submit"
              className="h-11.5 w-82.5 mb-4 cursor-pointer rounded-[20px] bg-purple font-semibold">
              Sign In
            </button>
            <div className="flex justify-center font-work font-semibold">
              <p>Don't have an account?</p>
              <Link className="ml-2.5 text-purple" to={'/sign-up'}>
                Create account
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
