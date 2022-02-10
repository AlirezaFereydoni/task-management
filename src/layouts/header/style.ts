import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: max-content;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  padding: 1rem min(4%, 45px);
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;

  h1 {
    margin: 0.7rem 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export { HeaderWrapper };
