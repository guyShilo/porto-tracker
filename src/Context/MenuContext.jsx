import React, {createContext} from 'react'

export default createContext({
    isMenuOpen: false,
    toggleMenu: () => {},
    stateChangeHandler: (newState) => newState
  });