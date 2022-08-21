import React from "react";
import * as S from "./styles";

type Props = {
  chave: string | string[];
  value: string | string[] | number;
  style?: React.CSSProperties;
  keyStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  orientation?: "row" | "column";
};

const Tupla = ({
  chave,
  value,
  style,
  keyStyle,
  valueStyle,
  orientation = "row",
}: Props) => {
  return (
    <S.Container style={{ ...style, flexDirection: orientation }}>
      <S.Text style={{ ...keyStyle }}>
        {chave}
        {orientation === "row" && ":"}
      </S.Text>
      <S.Text style={{ ...valueStyle, color: "rgba(0, 0, 0, 0.56)" }}>
        {value}
      </S.Text>
    </S.Container>
  );
};

export default Tupla;
