//style
import { NotFoundWrapper } from "./style";

// third library
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to="/">Go to Main Page</Link>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
