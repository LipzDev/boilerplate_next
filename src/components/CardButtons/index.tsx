/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ReactSVG } from "react-svg";
import * as S from "./styles";

type CardButtonsProps = {
  getTheme: any;
};

const CardButtons = ({ getTheme }: CardButtonsProps) => {
  // TEXTOS DO BOTÃO DE AUTORIZADO

  function getAuthButtonText() {
    switch (getTheme) {
      case null:
        return "Autorizar";

      case "autorizado":
        return "Autorizado";

      default:
        return "Autorizar";
    }
  }

  // TEXTOS DO BOTÃO DE NEGADO

  function getDenyButtonText() {
    switch (getTheme) {
      case null || "autorizado":
        return "Negar";

      case "negado":
        return "Negado";

      default:
        return "Negar";
    }
  }

  return (
    <S.ButtonWrapper>
      <S.Button
        themeColors={getAuthButtonText().toLocaleLowerCase()}
        onClick={() => alert("clicou")}
      >
        <ReactSVG src="/regulacao/assets/icons/positive.svg" />
        {getAuthButtonText()}
      </S.Button>
      <S.Button
        themeColors={getDenyButtonText().toLocaleLowerCase()}
        onClick={() => alert("clicou")}
      >
        <ReactSVG
          src="/regulacao/assets/icons/positive.svg"
          style={{ transform: "rotate(180deg)" }}
        />
        {getDenyButtonText()}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default CardButtons;
