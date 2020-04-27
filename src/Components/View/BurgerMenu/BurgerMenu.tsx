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
  // Importing the Menu context.
  const context = useContext(MenuContext);
  // Initiating the menu state.
  const [isOpen] = useState({
    isOpen: false,
  });
  // Importing history object with useHistory hook.
  const history = useHistory();
  // Extracting the path name to a variable for reuse.
  const urlPath = history.location.pathname;
  // Defining decorations for the menu buttons.
  const withoutDeco = "m-1 p-1";
  const withDeco = "m-1 p-1 active";
  // A function that decide if decoration is in need.
  const decideStyle = (path: string) =>
    path === urlPath ? withDeco : withoutDeco;
  // Inline styling for the menu buttons.
  const btnStyle = {
    background: "none",
    border: "none",
    color: "whitesmoke",
    padding: "0.2rem",
    outline: "none",
  };
  // Defining an Array which will be mapped over in order to display the buttons.
  const linksArray = [
    { linkName: "עמוד הבית", path: "/service" },
    { linkName: "הרשמה לשירות", path: "/registration" },
    { linkName: "שאלות ותשובות", path: "/faq" },
    { linkName: "קצת עלינו", path: "/about" },
    { linkName: "הסבר על תהליך האזרחות", path: "/process" },
  ];
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
