import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  padding: 0.7rem 0.5rem 0.5rem 0.5rem;
  background-color: ${props => props.theme.colors.light_grey};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  border-radius: 3px;
  box-sizing: border-box;
  position: relative;
  margin: 1rem 0;

  span {
    font-size: 10px;
    color: ${props => props.theme.colors.dark_grey};
    position: absolute;
    top: 0.2rem;
    left: 0.6rem;
  }

  input {
    width: 100%;
    border: none;
    background-color: inherit;
    &::placeholder {
      color: ${props => props.theme.colors.dark_grey};
    }
  }
`;

export { InputWrapper };
