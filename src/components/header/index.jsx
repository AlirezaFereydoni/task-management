// style
import { HeaderWrapper } from "./style";

/**
 * @component Header
 * @param {string} breadCrumb Routes of page
 * @returns JSX Element
 */

const Header = ({ breadCrumb = "Task Management" }) => {
  const manipulatedBreadCrumb = breadCrumb.replace(/\//g, " > ");
  return (
    <HeaderWrapper>
      <h1>{manipulatedBreadCrumb}</h1>
    </HeaderWrapper>
  );
};

export { Header };
