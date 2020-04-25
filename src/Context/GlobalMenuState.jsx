import React, { useState } from "react";
import MenuContext from "./MenuContext";
const GlobalMenuState = ({ children }) => {
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
