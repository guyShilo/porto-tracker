import React, { useState } from "react";
// make a new context
import MenuContext from './MenuContext'

// create the provider
const GlobalMenuState = ({children}) => {
    const [menuOpenState, setMenuOpenState] = useState(false);
    return (
        <MenuContext.Provider
        value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => {
                console.log('toggle menu')
                setMenuOpenState(!menuOpenState)
            },
            stateChangeHandler: (newState) =>
            {
                console.log('stateChangeHandler')
                setMenuOpenState(newState.isOpen)
            },
        }}
        >
        {children}
        </MenuContext.Provider>
    );
};

export default GlobalMenuState;
