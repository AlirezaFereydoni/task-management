// style
import { InputWrapper } from "./style";
import { ChangeEventHandler } from "react";

interface iInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
}

const Input = ({ onChange, value, placeholder }: iInput) => {
  return (
    <InputWrapper>
      {value && <span>{placeholder}</span>}
      <input onChange={onChange} value={value} placeholder={placeholder} autoComplete="off" />
    </InputWrapper>
  );
};

export { Input };
