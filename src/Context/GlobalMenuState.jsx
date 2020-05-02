import React, { useState } from "react";
import MenuContext from "./MenuContext";
const GlobalMenuState = ({ children }) => {
  // Initiating a state which will be used to handle the menu current state (close / open)
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [animationVisible, setAnimationVisible] = useState("visible");
  let outerWrapperID = null
  let pageWrapID = null
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => {
          setMenuOpenState(!menuOpenState);
        },
        stateChangeHandler: (newState) => {
          setMenuOpenState(newState.isOpen);
        },
        checkAnimation: (currentState) => {
          currentState === true
            ? setTimeout(() => {
                setAnimationVisible("visible");
              }, 1000)
            : setAnimationVisible("hidden");
        },
        animationVisible,
        outerWrapperID,
        pageWrapID
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default GlobalMenuState;
