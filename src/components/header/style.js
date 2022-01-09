import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: max-content;
  color: white;
  background-color: blue;
  padding: 1rem min(3%, 36px);
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export { HeaderWrapper };