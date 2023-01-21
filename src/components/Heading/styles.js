import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)}
  `
};

const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media (${theme.fonts.media.lteMedium}) {
    font-size: ${theme.fonts.sizes.xlarge};
    transition: ${theme.transition.fast};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, textTransform }) => css`
    color: ${colorDark
      ? theme.colors.fontColor.primaryColor
      : theme.colors.fontColor.yellowColor};
    ${titleSize[size](theme)}
    ${titleCase(textTransform)}
  `}
`;
