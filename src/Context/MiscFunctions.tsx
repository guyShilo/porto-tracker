import React from 'react'

const exportFunctions = {
    RenderPage: (
      state: number,
      obj: any,
      Component: React.FC<any>,
      Component2: React.FC<any>,
    ) => {
      switch (state) {
        case 1:
          return <Component2 exportObj={obj} />;
        case 0:
          return <Component exportObj={obj} />;
      }
    },
    checkPageState: (pageState: number, param: number) =>
      pageState === param ? "active" : "",
  };
  
  export const MiscFunctionsContext = React.createContext({
    funcStorage: exportFunctions,
  });