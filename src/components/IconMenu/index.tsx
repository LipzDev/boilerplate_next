import React, { useContext, useState } from "react";
import { MenuMobileContext } from "../../Context";
import * as Styles from "./styles";

const IconMenu = () => {
  const { isOpen, setIsOpen } = useContext<any>(MenuMobileContext);

  return (
    <>
      <Styles.Icon
        className={isOpen ? "active" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="icon-1"></span>
        <span className="icon-2"></span>
        <span className="icon-3"></span>
      </Styles.Icon>
    </>
  );
};

export default IconMenu;
