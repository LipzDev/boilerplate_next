import React from "react";
import { Container } from "../Container/styles";
import Wrapper from "../Wrapper";
import Logo from "../Logo";
import Menu from "../Menu";
import IconMenu from "../IconMenu";
import * as Styles from "./styles";

const Header = () => {
  return (
    <Styles.Header>
      <Container>
        <Wrapper flex="spaceBetween">
          <Logo />
          <Menu />
          <IconMenu />
        </Wrapper>
      </Container>
    </Styles.Header>
  );
};

export default Header;
