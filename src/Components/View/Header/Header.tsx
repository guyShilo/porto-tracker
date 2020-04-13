import React from "react";
import "./style/style.scss";
import { Link, useHistory } from "react-router-dom";

// const classNames = require('classnames')

export const Header: React.FC<{}> = ({}) => {
  const history = useHistory();
  const urlPath = history.location.pathname;
  const withoutDeco = "m-1 p-1 text-bold";
  const withDeco = "m-1 p-1 active";

  return (
    <div className="header p-1">
      <div className='d-flex flex-wrap'>
      <div className="buttonSection mr-5">
        <Link to="/service">
          <button className={urlPath === "/service" ? withDeco : withoutDeco}>
            הסבר על השירות
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/">
          <button className={urlPath === "/" ? withDeco : withoutDeco}>
            הרשמה לשירות
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/faq">
          <button className={urlPath === "/faq" ? withDeco : withoutDeco}>
           שאלות ותשובות
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/about">
          <button className={urlPath === "/about" ? withDeco : withoutDeco}>
            קצת עלינו
          </button>
        </Link>
        <span className="mr-2 p-2 text-light">|</span>
        <Link to="/process">
          <button className={urlPath === "/process" ? withDeco : withoutDeco}>
            הסבר על תהליך האזרחות
          </button>
        </Link>
      </div>
        <div className="header-title">
          <h4 className="text-left">PortoPass</h4>
        </div>
      </div>
    </div>
  );
};
