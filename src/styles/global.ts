import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.YELLOW_300};
  }

  body {
    background-color: ${({ theme }) => theme.GRAY_800};
    color: ${({ theme }) => theme.GRAY_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
