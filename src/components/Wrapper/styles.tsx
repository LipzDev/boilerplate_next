import styled, { css } from "styled-components";
import { WrapperProps } from ".";

const wrapperModifiers = {
  spaceBetween: () => css`
    align-items: center;
    justify-content: space-between;
  `,
};

type WrapperStyleProps = Pick<WrapperProps, "flex">;

export const Wrapper = styled.div<WrapperStyleProps>`
  ${({ theme, flex }) => css`
    display: flex;
    ${!!flex && wrapperModifiers[flex]}
  `}
`;
