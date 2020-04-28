import React from "react";
import {OurService} from "../../OurService/OurService";
import {RegisterBox} from '../../RegisterBox/RegisterBox'
import {About} from "../../About/About";
import {FrequentlyAsked} from "../../FrequentlyAsked/FrequentlyAsked";
import {Process} from "../../Process/Process";
export const Main: React.FC<{}> = ({}) => {
    document.title = "ראשי";
  return (
    <div>
        <OurService/>
        <RegisterBox/>
        <About/>
        <FrequentlyAsked/>
        <Process/>
        
    </div>
  );
};
