import { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';

type Props = {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
};

export const Input = ({ id, name, type, autoComplete, placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordIcon = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    switch (event.currentTarget.id) {
      case 'password':
        setShowPassword(!showPassword);
        break;
    }
  };

  const CustomInput = () => {
    return (
      <div className='flex relative'>
        <input
          // {...field}
          // {...props}
          className="border-0 w-82.5 h-11.5  rounded-[20px]"
        />
      </div>
    );
  };
 
  return (
    <div className='relative'>
      {(id === 'password' || id === 'confirmPassword') && (
        <span id='password' onClick={showPasswordIcon} className='absolute'>
          {showPassword ? <LockOpenIcon></LockOpenIcon> : <LockIcon></LockIcon>}
        </span>
      )}
      {id === 'email' && <EmailIcon className='icon'></EmailIcon>}
      {id === 'userName' && <PersonIcon className='icon'></PersonIcon>}
      <div className=''>
        <Field
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          as={CustomInput}
          type={
            id === 'password' || id === 'confirmPassword'
              ? showPassword
                ? 'text'
                : 'password'
              : type
          }
        />
        <small className='errorMessage'>
          <ErrorMessage name={name} />
        </small>
      </div>
    </div>
  )
}