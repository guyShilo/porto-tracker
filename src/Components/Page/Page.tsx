import React from "react";
import { Box } from "../Box/Box";
import { MiscFunctionsContext } from "../../Context/MiscFunctions";
import { About } from "../About/About";
import { OurService } from "../OurService/OurService";
import { FrequentlyAsked } from "../FrequentlyAsked/FrequentlyAsked";
import { Process } from "../Process/Process";
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
      <div className="">
        <OurService/>
        <Box sharedObject={{}}/>
        <FrequentlyAsked/>
      </div>
    </div>
  );
};
