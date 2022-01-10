import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        background-color: #f3f8fd;
        box-sizing:border-box;
        font-family: san-serif;
    }

  * {
      outline: none;
      box-sizing:border-box;
    }

  a {
    text-decoration:none;
    &:hover,
    &:active,
    &:visited {
      text-decoration:none;
    }
  }


  &::-webkit-scrollbar {
  width: 12px;
  height: 8px;
  }

  &::-webkit-scrollbar-track {
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${props => props.theme.colors.black};
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 6px;
  }


  .py-1 {
    padding:1rem 0;
  }

  .py-2 {
    padding:2rem 0;
  }

  .px-1 {
    padding: 0 1rem;
  }

  .px-2 {
    padding: 0 2rem;
  }

  .pxy-1 {
    padding:1rem;
  }

  .px-2 {
    padding: 2rem;
  }

  .my-1 {
    margin:1rem 0;
  }

  .my-2 {
    margin:2rem 0;
  }

  .mx-1 {
    margin: 0 1rem;
  }

  .mx-2 {
    margin: 0 2rem;
  }

  .mxy-1 {
    margin: 1rem;
  }

  .mxy-2 {
    margin: 2rem;
  }
    
`;

const Theme = {
  colors: {
    white: "#fff",
    black: "#000",
    dark: "#2e384d",
    light_grey: "#d2d3d6",
    dark_grey: "#7a7b7d",
    blue: "blue",
    light_blue: "#51b8e8",
  },
};

export { GlobalStyle, Theme };
