import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Components/View/Main/Main";
import { About } from "../Components/About/About";
import {OurService} from "../Components/OurService/OurService";
import {Process} from "../Components/Process/Process";
import {FrequentlyAsked} from "../Components/FrequentlyAsked/FrequentlyAsked";

// const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const ourService = `${baseUrl}service/`;
export const portoProcess = `${baseUrl}process/`;
export const aboutPage = `${baseUrl}about/`;
export const faq = `${baseUrl}faq/`;


export const Routes: React.FC<{}> = ({}) => (
  <Switch>
    <Route exact path={baseUrl} component={Main} />
    <Route path={aboutPage} component={About} />
    <Route path={ourService} component={OurService} />
    <Route path={portoProcess} component={Process} />
    <Route path={faq} component={FrequentlyAsked} />
  </Switch>
);

export default Routes;
