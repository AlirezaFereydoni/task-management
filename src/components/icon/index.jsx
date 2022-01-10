import { ReactComponent as AddIconSVG } from "../../assets/icons/add.svg";
import { ReactComponent as EditIconSVG } from "../../assets/icons/edit.svg";

const IconDictionary = {
  add: props => <AddIconSVG {...props} />,
  edit: props => <EditIconSVG {...props} />,
};

const Icon = ({ name, size, className, style, fill }) => {
  if (!IconDictionary[name]) {
    return undefined;
  }

  return IconDictionary[name]({
    width: `${size}rem`,
    height: `${size}rem`,
    className: className,
    style: style,
    fill: fill,
  });
};

export { Icon };
