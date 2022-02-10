import styled from "styled-components";

const TextAreaWrapper = styled.div<{ height: string }>`
  width: 100%;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
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

  textarea {
    width: 100%;
    height: ${props => (props.height ? `${props.height}rem` : "20rem")};
    border: none;
    background-color: inherit;
    resize: none;
    &::placeholder {
      color: ${props => props.theme.colors.dark_grey};
    }
  }
`;

export { TextAreaWrapper };
