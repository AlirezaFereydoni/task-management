import { ReactNode } from "react";

// style
import { MainLayoutWrapper } from "./style";

// components
import { Header } from "../header";

interface iMainLayout {
  path: string;
  children: ReactNode;
}

const MainPageLayout = ({ path, children }: iMainLayout) => {
  return (
    <MainLayoutWrapper>
      <Header breadCrumb={path} />
      <main className="Container">{children}</main>
    </MainLayoutWrapper>
  );
};

export { MainPageLayout };
