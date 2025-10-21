import { Link } from 'react-router';
import logoImg from '@/shared/img/Logo.png';
import userImg from '@/shared/img/User.png';

export const Header = () => {
  return (
    <header>
      <div className="h-25 px-13 flex justify-between py-5">
        <Link className="flex items-center" to="/">
          <img
            src={logoImg}
            alt="logo"
            className="h-auto max-w-full rounded-lg"
          />
        </Link>
        <div className="w-152 flex items-center justify-center">
          <ul className="flex list-none items-center gap-3 text-center font-work text-base font-semibold text-white">
            <li className="w-35 py-1.5">
              <Link to={'/marketplace'}>Marketplace</Link>
            </li>
            <li className="w-28">
              <Link to={'#'}>Rankings</Link>
            </li>
            <li className="w-43.5">
              <Link to={'/connect-wallet'}>Connect a wallet</Link>
            </li>
            <Link to="/sign-up">
              <li className="h-15 w-38 flex cursor-pointer items-center justify-center rounded-[20px] bg-purple">
                <img
                  src={userImg}
                  alt="userImg"
                  className="mr-3 w-5 rounded-lg"
                />
                <p>Sign Up</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};
