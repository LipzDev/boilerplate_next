import React, { useContext } from "react";
import { MenuMobileContext } from "../../Context";
import * as Styles from "../Menu/styles";

const Menu = () => {
  const { isOpen } = useContext<any>(MenuMobileContext);

  return (
    <Styles.Nav className={isOpen ? "active" : ""}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </Styles.Nav>
  );
};

export default Menu;
