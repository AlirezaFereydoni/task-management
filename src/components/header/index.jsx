// style
import { HeaderWrapper } from "./style";

const Header = ({ breadCrumb = "Task Management" }) => {
  const manipulatedBreadCrumb = breadCrumb.replace(/\//g, " > ");
  return (
    <HeaderWrapper>
      <h1>{manipulatedBreadCrumb}</h1>
    </HeaderWrapper>
  );
};

export { Header };
