import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Components/View/Main/Main";
import { About } from "../Components/About/About";

// const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const mainPage = `${baseUrl}main/`;
export const aboutPage = `${baseUrl}about/`;


export const Routes: React.FC<{}> = ({}) => (
  <Switch>
    <Route exact path={baseUrl} component={Main} />
    <Route path={aboutPage} component={About} />
  </Switch>
);

export default Routes;
