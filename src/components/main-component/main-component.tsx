import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface MainContentProps {
  children?: ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main>
      {children}
      {<Outlet />}
    </main>
  );
};
