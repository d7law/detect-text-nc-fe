import React from "react";
import { MainLayoutWrapper } from "./styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

export default MainLayout;
