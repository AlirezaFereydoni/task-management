import styled from "styled-components";

const CardWrapper = styled.div`
  width: 15rem;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  box-shadow: 1px 1px 7px -1px ${props => props.theme.colors.dark_grey};

  .title {
    font-weight: bold;
    font-size: 18px;
    margin: 0 0 0.5rem 0;
  }

  p {
    word-wrap: break-word;
    text-transform: justify;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .status {
      text-transform: capitalize;
      padding: 0.3rem 1rem;
      border-radius: 3px;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.blue};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { CardWrapper };
