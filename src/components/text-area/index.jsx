// style
import { TextAreaWrapper } from "./style";

const TextArea = ({ onChange, value, placeholder, height = "8" }) => {
  return (
    <TextAreaWrapper height={height}>
      {value && <span>{placeholder}</span>}
      <textarea onChange={onChange} value={value} placeholder={placeholder} autoComplete="off" />
    </TextAreaWrapper>
  );
};

export { TextArea };
