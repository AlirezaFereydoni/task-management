import styled from "styled-components";

const Base = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 3px;
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueBtn = styled(Base)`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};

  svg {
    margin-right: 0.5rem;
    line-height
  }
`;

const WhiteBtn = styled(Base)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.cool_grey};
  border: 1px solid ${props => props.theme.colors.cool_grey};
`;

export { BlueBtn, WhiteBtn };
