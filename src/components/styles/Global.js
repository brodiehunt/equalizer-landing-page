import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };

  body {
    --turqoise: #66E2DC;
    --orange: #FA7453;
    --yellow: #FFB964;
    --text-light: #FCFAF9;
    --text-dark: #191826;
    font-family: 'IBM Plex Sans', sans-serif;
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 400;
  }
  
  h1, 
  h2, 
  h3 {
    font-weight: 700;
  };
`;

export default GlobalStyles;