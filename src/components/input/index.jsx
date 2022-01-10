// style
import { InputWrapper } from "./style";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <InputWrapper>
      {value && <span>{placeholder}</span>}
      <input onChange={onChange} value={value} placeholder={placeholder} autoComplete="off" />
    </InputWrapper>
  );
};

export { Input };
