import React from "react";
import {Link} from 'react-router-dom'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import "./style/style.scss";
import logo from "../../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <div className="headerMain">
      <div className="headerMainDiv col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <BurgerMenu />
          </div>
          <div className="col-sm-6 logoDiv">
            <Link to="/">
              <img className="logoImage text-center" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
