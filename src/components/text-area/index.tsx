// style
import { TextAreaWrapper } from "./style";

// type
import { ChangeEventHandler } from "react";

interface iTextArea {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  placeholder: string;
  height: string;
}

const TextArea = ({ onChange, value, placeholder, height = "8" }: iTextArea) => {
  return (
    <TextAreaWrapper height={height}>
      {value && <span>{placeholder}</span>}
      <textarea onChange={onChange} value={value} placeholder={placeholder} autoComplete="off" />
    </TextAreaWrapper>
  );
};

export { TextArea };
