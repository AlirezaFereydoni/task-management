// style
import { HeaderWrapper } from "./style";

/**
 * @component Header
 * @param {string} breadCrumb Routes of page
 * @returns JSX Element
 */

const Header = ({ breadCrumb = "Task Management" }) => {
  return (
    <HeaderWrapper>
      <h1>{breadCrumb}</h1>
    </HeaderWrapper>
  );
};

export { Header };
