import React from "react";
import * as Styles from "../Wrapper/styles";

export type WrapperProps = {
  children: React.ReactNode;
  flex?: "spaceBetween";
};

const Wrapper = ({ children, flex }: WrapperProps) => {
  return <Styles.Wrapper flex={flex}>{children}</Styles.Wrapper>;
};

export default Wrapper;
