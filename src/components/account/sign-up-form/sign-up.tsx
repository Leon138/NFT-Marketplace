import { Form, Formik } from 'formik';
import { Input } from '../input/input';
import { Link } from 'react-router-dom';
import { validationShema } from './validation-scheme';
import createAccountImg from '../../../shared/img/crateaccount.png'

interface IInitialValues {
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export const SignUpForm = () => {
  const initialValues: IInitialValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  return (
    <section className='flex'>
      <div className='mr-15 w-1/2'>
        <img src={createAccountImg} alt="space image" className='rounded-r-[20px] object-cover w-full h-auto max-h-190' />
      </div>
      <div className='flex flex-col font-work text-white top-25 relative'>
        <h1 className='text-[51px] font-semibold mb-5'>Create Account</h1>
        <p className='text-[22px] font-normal'>Welcome! Enter Your Details And Start <br /> Creating, Collecting And Selling NFTs.</p>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values: IInitialValues) => console.log(values)}
          >
            <Form>
              <Input id='userName' name='userName' type='text' autoComplete='off' placeholder='Username'/>
              <Input id='email' name='email' type='text' placeholder='Email' autoComplete='off' />
              <Input id='password' name='password' autoComplete='off' placeholder='Password' />
              <Input id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' autoComplete='off'/>
              <button type='submit'>Sign Up</button>
              <p>Already registered!</p>
              <Link className='link' to={'/sign-in'}>
                Sign in
              </Link> 
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}