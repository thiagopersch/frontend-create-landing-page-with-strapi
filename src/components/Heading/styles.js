import styled, { css } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.fontColor.primaryColor};
    font-family: ${theme.fonts.poppins};
  `}
`;
