// style
import { MainLayoutWrapper } from "./style";

// components
import { Header } from "../header";

const MainPageLayout = ({ path, children }) => {
  return (
    <MainLayoutWrapper>
      <Header breadCrumb={path} />
      <main className="Container">{children}</main>
    </MainLayoutWrapper>
  );
};

export { MainPageLayout };
