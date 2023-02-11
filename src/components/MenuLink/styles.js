import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.medium};
    font-weight: ${theme.fonts.bold};
    color: ${theme.colors.fontColor.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0,
      height: 0.2rem;
      background-color: ${theme.colors.fontColor.secondaryColor};
      transition: ${theme.transition.fast};
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
