import React from "react";
import { ReactSVG } from "react-svg";
import * as S from "./styles";

type GuidelinesProps = {
  diretrizes: { nome: string }[];
};

const Guidelines = ({ diretrizes }: GuidelinesProps) => {
  return (
    <S.Guidelines>
      <p>Diretrizes</p>

      <div>
        {diretrizes?.map((item, index) => (
          <div className="column-guidelines" key={index}>
            <S.ButtonGuideline onClick={() => alert("clicou")}>
              <ReactSVG src="/regulacao/assets/icons/file.svg" wrapper="span" />
              <p>{item?.nome}</p>
            </S.ButtonGuideline>
          </div>
        ))}
      </div>
    </S.Guidelines>
  );
};

export default Guidelines;
