import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.backgroundColor.darkBg};
  color: ${theme.colors.fontColor.whiteColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.backgroundColor.mainBg};
    color: ${theme.colors.fontColor.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
