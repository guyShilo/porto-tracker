import React, { useState, useEffect } from "react";
import MenuContext from "./MenuContext";
const GlobalMenuState = ({ children }) => {
  // Initiating a state which will be used to handle the menu current state (close / open)
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [menuAnimation, setAnimation] = useState(false);
  let outerWrapperID = null;
  let pageWrapID = null;

  // useEffect(() => {
  //   setAnimation(true)
  // });
  
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => {
          setMenuOpenState(!menuOpenState);
          setAnimation(!menuAnimation)
        },
        stateChangeHandler: (newState) => {
          setMenuOpenState(newState.isOpen);
        },
        closeMenu: () => {
          setMenuOpenState(false)
          setAnimation(false)
        },
        menuAnimation,
        outerWrapperID,
        pageWrapID,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default GlobalMenuState;
