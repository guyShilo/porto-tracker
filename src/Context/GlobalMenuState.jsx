import React, { useState } from "react";
import MenuContext from "./MenuContext";
const GlobalMenuState = ({ children }) => {
    // Initiating a state which will be used to handle the menu current state (close / open)
    const [menuOpenState, setMenuOpenState] = useState(false);
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
        }}
        >
        {children}
        </MenuContext.Provider>
    );
};
export default GlobalMenuState;
