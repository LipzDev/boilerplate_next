import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30vh;
    }
  `}
`;
