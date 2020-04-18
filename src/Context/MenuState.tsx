import React, { useState, useContext } from "react";
export interface Props {
    isMenuOpen: boolean | null;
    toggleMenu: () => void | null;
    stateChangeHandler: (newState: { isOpen: boolean }) => void | null;
  }
// make a new context
const MyContext = React.createContext<Props | null>(null);

// create the provider
const MyProvider = (props: any) => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState: { isOpen: boolean }) =>
          setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
