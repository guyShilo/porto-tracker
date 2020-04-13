import React from "react";
import { Box } from "../Box/Box";
import { MiscFunctionsContext } from "../../Context/MiscFunctions";
import { About } from "../About/About";
interface PageProps {}

export const Page: React.FC<PageProps> = ({}) => {
  const functions = React.useContext(MiscFunctionsContext);
  const [pageState, setPageState] = React.useState(0);

  const sharedObject = {
    functions,
    pageState,
    setPageState
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center">
        {functions.funcStorage.RenderPage(pageState, 
          sharedObject, Box, About)}
      </div>
    </div>
  );
};
