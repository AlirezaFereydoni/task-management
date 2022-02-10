// style
import { CardWrapper } from "./style";

// icon
import { Icon } from "../icon";

// hooks
import { useNavigate } from "react-router-dom";

// types
import { iTask } from "../../types/interfaces";

const Card = ({ title, description, status, id }: iTask) => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <h6 className="title">{title}</h6>
      <p>{description}</p>
      <div className="footer">
        <div className="status">{status}</div>
        <Icon
          name="edit"
          size="1"
          fill="black"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/edit/${id}`)}
        />
      </div>
    </CardWrapper>
  );
};

export { Card };
