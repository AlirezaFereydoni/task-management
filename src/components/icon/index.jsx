import { ReactComponent as AddIconSVG } from "../../assets/icons/add.svg";
import { ReactComponent as EditIconSVG } from "../../assets/icons/edit.svg";
import { ReactComponent as ChevronDownSVG } from "../../assets/icons/chevron-down.svg";

const IconDictionary = {
  add: props => <AddIconSVG {...props} />,
  edit: props => <EditIconSVG {...props} />,
  chevronDown: props => <ChevronDownSVG {...props} />,
};

const Icon = props => {
  const { name, size, className, style, fill } = { ...props };

  if (!IconDictionary[name]) {
    return undefined;
  }

  return IconDictionary[name]({
    width: `${size}rem`,
    height: `${size}rem`,
    className: className,
    style: style,
    fill: fill,
    ...props,
  });
};

export { Icon };
