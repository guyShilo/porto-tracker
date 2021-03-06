import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../Components/About/About";
import { OurService } from "../Components/OurService/OurService";
import { Process } from "../Components/Process/Process";
import { FrequentlyAsked } from "../Components/FrequentlyAsked/FrequentlyAsked";
import { RegisterBox } from "src/Components/RegisterBox/RegisterBox";
import { NotFound } from "src/Components/NotFound/NotFound";
import { Regulations } from "src/Components/Regulations/Regulations";

// const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const ourService = `${baseUrl}service/`;
export const portoProcess = `${baseUrl}process/`;
export const aboutPage = `${baseUrl}about/`;
export const registration = `${baseUrl}registration/`;
export const faq = `${baseUrl}faq/`;
export const regulations = `${baseUrl}regulations/`;

export const Routes: React.FC = () => (
  <Switch>
      <Route exact path={baseUrl} component={OurService} />
      <Route path={registration} component={RegisterBox} />
      <Route path={aboutPage} component={About} />
      <Route path={ourService} component={OurService} />
      <Route path={portoProcess} component={Process} />
      <Route path={faq} component={FrequentlyAsked} />
      <Route path={regulations} component={Regulations} />
      <Route component={NotFound} />
  </Switch>
);

export default Routes;
