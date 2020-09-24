import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Open+Sans:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F9FBFF;
    font-size: 16px;
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;
