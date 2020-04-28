import React from "react";
import "./style/style.scss";
import { Link, useHistory } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/logo.png";

export const Header: React.FC<{}> = ({}) => {
  const history = useHistory();
  const urlPath = history.location.pathname;
  const withoutDeco = "m-1 p-1";
  const withDeco = "m-1 p-1 active";

  return (
    <div className="header">
      <div>
        <BurgerMenu />
        <img className="logoImage text-center" src={logo} alt="logo" />
      </div>
      <div>
      </div>
    </div>
  );
};
