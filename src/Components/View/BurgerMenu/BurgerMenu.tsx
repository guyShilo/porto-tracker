import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./JStyles";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import "./styles.scss";
import { Link } from "react-router-dom";
import MenuContext from "../../../Context/MenuContext";
import { animationHelpers } from "../../../Utils";
import { AiOutlineMenu } from "react-icons/ai";

export const BurgerMenu: React.FC<{}> = () => {
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
    listStyle: "none",
    fontSize: '1.3rem'
  };
  // Defining an Array which will be mapped over in order to display the buttons.
  const linksArray = [
    { linkName: "עמוד הבית", path: "/" },
    { linkName: "הרשמה לשירות", path: "/registration" },
    { linkName: "שאלות ותשובות", path: "/faq" },
    { linkName: "קצת עלינו", path: "/about" },
    { linkName: "הסבר על התהליך", path: "/process" },
  ];
  return (
    <div>
      <Menu
        burgerButtonClassName="customButton"
        isOpen={context.isMenuOpen}
        onStateChange={context.stateChangeHandler(isOpen)}
        className="text-right"
        right
        styles={styles}
        customBurgerIcon={
          <AiOutlineMenu
            className="btn"
            size={30}
          />
        }
      >
        <motion.ul
          style={{ outline: "none" }}
          variants={animationHelpers.containerAnimation}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {linksArray.map((link, index) => (
            <Link
              style={{ outline: "none", textDecoration: "none" }}
              to={link.path}
              onClick={() => {
                context.toggleMenu();
              }}
              key={index + 1}
            >
              <motion.div variants={animationHelpers.itemAnimation}>
                <motion.li
                  onClick={() => {
                    context.toggleMenu();
                    history.push(link.path);
                  }}
                  className={decideStyle(link.path)}
                  key={index + 1}
                  style={btnStyle}
                >
                  {link.linkName}
                </motion.li>
                <hr className="bg-light"/>
              </motion.div>
            </Link>
          ))}
        </motion.ul>
      </Menu>
    </div>
  );
};
