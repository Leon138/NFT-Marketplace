import React from 'react';
import { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const showPasswordIcon = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      switch (event.currentTarget.id) {
        case 'password':
          setShowPassword(!showPassword);
          break;
      }
    };

    const CustomInput = ({ field, form, ...props }: any) => {
      return (
        <input
          {...field}
          {...props}
          className="h-11.5 w-82.5 pl-13 focus:border-3 border-purple-500 focus:border-purple-500 rounded-[20px] border-0 border-solid bg-white py-5 text-black outline-0 transition-colors duration-300"
        />
      );
    };

    return (
      <div className="relative">
        {(props.id === 'password' || props.id === 'confirmPassword') && (
          <span
            id="password"
            onClick={showPasswordIcon}
            className="top-1/6 absolute left-4"
            style={{ color: '#BDBDBD' }}>
            {showPassword ? <LockOpenIcon /> : <LockIcon />}
          </span>
        )}
        {props.id === 'email' && (
          <EmailIcon
            className="top-1/6 absolute left-4"
            style={{ color: '#BDBDBD' }}
          />
        )}
        {props.id === 'userName' && (
          <PersonIcon
            className="top-1/6 absolute left-4"
            style={{ color: '#BDBDBD' }}
          />
        )}
        <div className="flex flex-col">
          <Field
            ref={ref}
            {...props}
            as={CustomInput}
            type={
              props.id === 'password' || props.id === 'confirmPassword'
                ? showPassword
                  ? 'text'
                  : 'password'
                : props.type
            }
          />
        </div>
        <small className="ml-5 text-sm font-bold text-rose-700">
          <ErrorMessage name={props.name} />
        </small>
      </div>
    );
  },
);
