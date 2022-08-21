import React from "react";
import CardButtons from "../CardButtons";
import Guidelines from "../Guidlines";
import Tupla from "../Tupla";
import * as S from "./styles";

type CardProps = {
  hasGuidlines?: boolean;
  cardType:
    | "REGULACAO"
    | "SAIDA_GUIA"
    | "AUDITORIA_ESPECIALIZADA"
    | "PERICIA_MEDICA"
    | "PENDENCIA"
    | "SUPERVISAO"
    | "COTACAO";
};

const Card = ({ hasGuidlines, cardType = "REGULACAO" }: CardProps) => {
  const tuplaContent = [
    { chave: "Tipo do item", valor: "Medicamento" },
    { chave: "Qtd Solicitada", valor: "999" },
    { chave: "Bilateral", valor: "Sim" },
    { chave: "Motivo da Solicitação", valor: "Lorem ipsum dolor" },
    { chave: "Fracionamento/Dosagem", valor: "Lorem ipsum dolor" },
  ];

  const diretrizes = [
    { nome: "Medicamento" },
    { nome: "999" },
    { nome: "Sim" },
    { nome: "Lorem ipsum dolor" },
    { nome: "Lorem ipsum dolor" },
  ];

  const status = "AUTORIZADO";

  function getStatus() {
    switch (status as string) {
      case "PENDENTE":
        return null;

      case "AUTORIZADO":
        return "autorizado";

      case "NAO_AUTORIZADO":
        return "negado";

      default:
        return null;
    }
  }

  return (
    <S.Container>
      <S.Wrapper themeColors={getStatus()?.toLocaleLowerCase()}>
        <S.CardContent>
          <S.CardTop>
            <h1>0000006876 - DICLOFENACO POTASSICO - GENERICO 50mg</h1>

            <S.Info>
              {tuplaContent.map((item, index) => (
                <Tupla
                  key={index}
                  orientation="column"
                  keyStyle={{ fontWeight: 600 }}
                  chave={item?.chave}
                  value={item?.valor}
                />
              ))}
            </S.Info>
          </S.CardTop>

          {cardType !== "PENDENCIA" && <S.HorizontalDivider />}

          {hasGuidlines && (
            <>
              <Guidelines diretrizes={diretrizes} />
              <S.HorizontalDivider />
            </>
          )}

          <S.CardBottom>
            {(cardType === "REGULACAO" ||
              cardType === "PERICIA_MEDICA" ||
              cardType === "AUDITORIA_ESPECIALIZADA") && (
              <>
                <S.InputFields>
                  <input />
                  <input />
                </S.InputFields>
                <S.VerticalDivider />
                <CardButtons getTheme={getStatus()} />
              </>
            )}

            {(cardType === "COTACAO" ||
              cardType === "SAIDA_GUIA" ||
              cardType === "SUPERVISAO") && (
              <>
                <S.InputFields>
                  <input />
                  <input />
                </S.InputFields>
                <S.VerticalDivider />
                <CardButtons getTheme={getStatus()} />
              </>
            )}

            {cardType === "PENDENCIA" && <></>}
          </S.CardBottom>
        </S.CardContent>
      </S.Wrapper>
    </S.Container>
  );
};

export default Card;
