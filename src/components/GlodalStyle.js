import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
      background: linear-gradient(
      rgba(30, 27, 38, 0.95),
      rgba(30, 27, 38, 0.95)
    );
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
    margin: 0;
    font-family: 'Poppins', sans-serif; /* Изменим шрифт на Poppins */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Courier New', monospace; 
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }
`;
