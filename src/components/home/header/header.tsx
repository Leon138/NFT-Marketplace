import { Link } from 'react-router';
import logoImg from '../../../shared/img/Logo.png'
import userImg from '../../../shared/img/User.png'

export const Header = () => {

  return (
    <header>
      <div className="flex justify-between h-25 py-5 px-13">
        <Link className='flex items-center ' to='/'>
          <img src={logoImg} alt="logo" className='max-w-full h-auto rounded-lg'/>
        </Link>
        <div className="w-152 flex items-center justify-center">
          <ul className='flex items-center text-center list-none text-base font-work font-semibold gap-3  text-amber-50'>
            <li className='w-35 py-1.5'>
              <Link className='' to={'#'}>Marketplace</Link>
            </li>
            <li className='w-28'>
              <Link className='' to={'#'}>Rankings</Link>
            </li>
            <li className='w-43.5'>
              <Link className='' to={'#'}>Connect a wallet</Link>
            </li>
            <Link className='' to='/sign-up'>
              <li className='w-38 flex items-center justify-center bg-link h-15 rounded-[20px] cursor-pointer'>
                <img src={userImg} alt="userImg" className='w-5 mr-3 rounded-lg'/>
                <p>Sign Up</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  )
}