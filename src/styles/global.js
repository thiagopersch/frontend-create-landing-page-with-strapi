import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.backgroundColor.mainBg};
      font-size: 1.6rem;
      font-family: ${theme.fonts.secondary};
      outline: none;
    `}
  }

  h1,h2,h3,h4,h5,h6 {
      font-family: ${({ theme }) => theme.fonts.secondary};
      margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.fontColor.secondaryColor};
  }
`;
