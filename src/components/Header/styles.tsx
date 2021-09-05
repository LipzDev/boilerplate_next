import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
  `}
`;