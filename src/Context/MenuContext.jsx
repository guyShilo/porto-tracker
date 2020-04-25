import React, {createContext} from 'react'
// Create the Context and export it.
export default createContext({
    isMenuOpen: false,
    toggleMenu: () => {},
    stateChangeHandler: (newState) => newState
  });