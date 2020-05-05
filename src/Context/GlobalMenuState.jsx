import React, { useState } from "react";
import MenuContext from "./MenuContext";
const GlobalMenuState = ({ children }) => {
  // Initiating a state which will be used to handle the menu current state (close / open).
  const [menuOpenState, setMenuOpenState] = useState(false);
    // Initiating a state which will be used to handle the animation state.
  const [menuAnimation, setAnimation] = useState(false);
  
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
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default GlobalMenuState;
