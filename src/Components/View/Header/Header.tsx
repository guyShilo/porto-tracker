import React from "react";
import "./style/style.scss";
import { Link, useHistory } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/logo.png";

export const Header: React.FC<{}> = ({}) => {
  const history = useHistory();
  const urlPath = history.location.pathname;

  return (
    <div className="headerMain">
      <div className="headerMainDiv col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <BurgerMenu />
          </div>
          <div className="col-sm-6 logoDiv">
            <img className="logoImage text-center" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
