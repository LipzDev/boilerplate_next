/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

const dinamicColors: any = {
  negado: () => css`
    background: #f44336;
  `,

  autorizado: () => css`
    background: #38b449;
  `,
};

export const Container = styled.div`
  width: 900px;
`;

export const Wrapper = styled.div<any>`
  ${({ themeColors }) => css`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 8px;
    position: relative;
    border: 1px solid #ebebeb;

    :before {
      content: "";
      background-color: #ebebeb;
      ${dinamicColors[themeColors]}
      width: 5px;
      height: 100%;
      position: absolute;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  `}
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTop = styled.div`
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputFields = styled.div`
  width: 20%;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #ebebeb;
  margin: 20px 0;
`;

export const VerticalDivider = styled.div`
  width: 2px;
  height: 50px;
  background: #ebebeb;
`;
