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
    }

  a {
    text-decoration:none;
    &:hover,
    &:active,
    &:visited {
      text-decoration:none;
    }
  }
    
`;

const Theme = {
  colors: {
    white: "#fff",
    black: "#000",
    dark: "#2e384d",
    light_gray: "#F6F8FC",
    blue: "blue",
  },
};

export { GlobalStyle, Theme };
