import React, { useState, useEffect, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./JStyles";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import "./styles.scss";
import { Link } from "react-router-dom";
import MenuContext from "../../../Context/MenuContext";
import { animationHelpers } from "../../../Utils";
import logo from "../../../assets/logo.png";

export const BurgerMenu: React.FC<{}> = (props) => {
  const history = useHistory();
  const urlPath = history.location.pathname;
  const withoutDeco = "m-1 p-1";
  const withDeco = "m-1 p-1 active";
  const [isOpen, setisOpen] = useState({
    isOpen: false,
  });
  const decideStyle = (path: string) =>
    path === urlPath ? withDeco : withoutDeco;
  const btnStyle = {
    background: "none",
    border: "none",
    color: "whitesmoke",
    padding: "0.2rem",
    outline: "none",
  };

  const linksArray = [
    { linkName: "עמוד הבית", path: "/service" },
    { linkName: "הרשמה לשירות", path: "/registration" },
    { linkName: "שאלות ותשובות", path: "/faq" },
    { linkName: "קצת עלינו", path: "/about" },
    { linkName: "הסבר על תהליך האזרחות", path: "/process" },
  ];
  const context = useContext(MenuContext);

  return (
    <div>
      <Menu
        isOpen={context.isMenuOpen}
        onStateChange={context.stateChangeHandler(isOpen)}
        className="text-right"
        right
        styles={styles}
      >
        <div className="w-100 mb-1">
          <img
            style={{ zIndex: 1001}}
            className="w-100 text-center"
            onClick={() => {
              history.push("/service")
              context.toggleMenu()
            }}
            src={logo}
            alt="logo"
          />
        </div>
        {linksArray.map((link, index) => (
          <motion.div
            style={{ outline: "none" }}
            variants={animationHelpers.createVariants("scale", 0.75, 1)}
            initial="variantA"
            whileHover="variantB"
            className="text-center"
            key={index + 1}
          >
            <Link to={link.path} onClick={() => context.toggleMenu()}>
              <button
                // onClick={() => setIsOpen({
                //   isOpen: !isOpen
                // })}
                className={decideStyle(link.path)}
                style={btnStyle}
              >
                {link.linkName}
              </button>
            </Link>
          </motion.div>
        ))}
      </Menu>
    </div>
  );
};
