import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.background};
    transition: background 0.3s linear;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.blueLight};
    border-radius: 20px;
  }
`;
