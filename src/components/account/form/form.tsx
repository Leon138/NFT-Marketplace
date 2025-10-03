import { Outlet } from 'react-router-dom';
import createAccountImg from '@/shared/img/crateaccount.png';

export const Form = () => {
  return (
    <section className="flex">
      <div className="mr-15 w-1/2">
        <img
          src={createAccountImg}
          alt="space image"
          className="max-h-190 h-auto w-full rounded-r-[20px] object-cover"
        />
      </div>
      <div className="top-25 relative flex flex-col font-work text-white">
        {<Outlet />}
      </div>
    </section>
  );
};
