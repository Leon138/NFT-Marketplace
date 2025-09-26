import type { ReactNode } from "react";
import { Outlet } from "react-router-dom"

interface MainContentProps {
  children?: ReactNode; // Объявляем children как необязательный
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main>
      {children}
      {<Outlet />}
    </main> 
  )
}