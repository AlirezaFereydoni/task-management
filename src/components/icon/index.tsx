import { ReactComponent as AddIconSVG } from "../../assets/icons/add.svg";
import { ReactComponent as EditIconSVG } from "../../assets/icons/edit.svg";
import { ReactComponent as ChevronDownSVG } from "../../assets/icons/chevron-down.svg";

interface IconProps {
  name: string;
  size: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  onClick?: () => void;
}

interface MainIcon extends IconProps {
  width: string;
  height: string;
}

interface DictionaryType {
  [key: string]: (props: MainIcon) => JSX.Element;
}

const IconDictionary: DictionaryType = {
  add: (props: MainIcon) => <AddIconSVG {...props} />,
  edit: (props: MainIcon) => <EditIconSVG {...props} />,
  chevronDown: (props: MainIcon) => <ChevronDownSVG {...props} />,
};

const Icon = (props: IconProps): JSX.Element | null => {
  const { name, size, className, style, fill } = { ...props };

  if (!IconDictionary[name]) {
    return null;
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
