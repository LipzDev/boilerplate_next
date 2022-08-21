import styled from "styled-components";

export const Guidelines = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    font-size: 14px;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: flex-end;

    .column-guidelines {
      width: fit-content;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;

        span {
          position: relative;
          top: 1px;
          left: -2px;

          svg {
            path {
              fill: white;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  div + div {
    margin-left: 20px;
  }
`;

export const ButtonGuideline = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2b45d4;
  cursor: pointer;

  &:hover {
    background-color: rgb(23, 49, 192);
  }

  svg path {
    fill: white;
  }

  svg {
    margin-right: 5px;
    margin-top: 4px;
    width: 14px;
  }
`;
