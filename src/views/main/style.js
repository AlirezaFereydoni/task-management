import styled from "styled-components";

const MainWrapper = styled.div`
  .main-header,
  .main-section {
    padding: 2rem min(4%, 45px) 4rem min(4%, 45px);
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;

    h4 {
      font-size: 18px;
      font-weight: bold;
      margin: 1rem 0;
    }
  }

  .main-section {
    background-color: ${props => props.theme.colors.light_blue};
    margin-top: -3rem;
    padding-top: 2rem;
    min-height: 200px;
    max-height: 300px;
    overflow-y: auto;
    display: flex;

    &.text-wrapper {
      justify-content: center;
      align-items: center;

      p {
        font-size: 18px;
        span {
          display: block;
          line-height: 1.5;
        }
      }
    }

    &.item-wrapper {
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem 0.5rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: 535px) {
    .main-section.item-wrapper {
      justify-content: center;
    }
  }
`;

export { MainWrapper };
