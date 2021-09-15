import React, { useState, createContext } from "react";

export const MenuMobileContext = createContext({});

export const MenuMobileProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuMobileContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </MenuMobileContext.Provider>
  );
};
