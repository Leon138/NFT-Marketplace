import { Outlet } from 'react-router-dom';

export const Container = () => {
  return (
    <div className="w-262.5 container mx-auto">
      <Outlet />
    </div>
  );
};
