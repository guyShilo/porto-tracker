import React from "react";
import "./style/style.scss";
import { Link, useHistory } from "react-router-dom";

// const classNames = require('classnames')

export const Header: React.FC<{}> = ({}) => {
  const history = useHistory();
  const urlPath = history.location.pathname;
  const withoutDeco = "m-1 p-1";
  const withDeco = "m-1 p-1 active";

  return (
    <div className="header p-1">
      <h4 className="mr-4">PortoPass</h4>
      <div className="buttonSection d-flex justify-content-end w-75">
        <Link to="/about">
          <button className={urlPath === "/about" ? withDeco : withoutDeco}>
            קצת עלינו
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/">
          <button className={urlPath === "/" ? withDeco : withoutDeco}>
            הרשמה לשירות
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/">
          <button className={urlPath === "/process" ? withDeco : withoutDeco}>
            הסבר על תהליך האזרחות
          </button>
        </Link>
      </div>
    </div>
  );
};
