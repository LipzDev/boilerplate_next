/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

const wrapperModifiers: any = {
  negado: () => css`
    color: #f44336;
    background-color: rgba(244, 67, 54, 0.04);
    cursor: default;

    &:hover {
      background-color: rgba(244, 67, 54, 0.04);
    }

    svg path {
      fill: #f44336;
    }
  `,

  autorizado: () => css`
    color: #38b449;
    background-color: rgba(56, 180, 73, 0.06);
    cursor: default;

    &:hover {
      background-color: rgba(56, 180, 73, 0.06);
    }

    svg path {
      fill: #38b449;
    }
  `,
};

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
`;

export const Button = styled.button<any>`
  ${({ themeColors = "inicial" }) => css`
    min-width: 100%;
    height: 55px;
    border: none;
    border-radius: 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #6c6c6c;
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;

    svg path {
      fill: #6c6c6c;
    }

    &:hover {
      transition: 0.5s;
      background-color: rgba(0, 0, 0, 0.15);
    }

    svg {
      margin: 0px 10px;
    }

    transition: 0.5s;

    ${wrapperModifiers[themeColors]};
  `}
`;
