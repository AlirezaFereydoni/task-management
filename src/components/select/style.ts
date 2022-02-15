import styled from "styled-components";

// input style
import { InputWrapper } from "../input/style";

const SelectBoxWrapper = styled(InputWrapper)<{ isOpen: boolean }>`
  position: relative;
  cursor: pointer;

  svg {
    right: 0.5rem;
    position: absolute;
  }

  ul {
    width: inherit;
    height: fit-content;
    max-height: 5rem;
    overflow-y: auto;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 25px;
    box-shadow: 1px 1px 7px -1px ${props => props.theme.colors.dark_grey};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    z-index: 100;
    display: ${props => (props.isOpen ? "block" : "none")};

    li {
      color: ${props => props.theme.colors.black};
      background-color: ${props => props.theme.colors.white};
      padding: 0.5rem;
      font-size: 15px;
      &:hover {
        background-color: ${props => props.theme.colors.light_grey};
      }
    }
  }

  input {
    text-transform: capitalize;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
  }
`;

export { SelectBoxWrapper };
