import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import { styles } from "./JStyles";
import { animationHelpers } from "../../../Utils";
import { AiOutlineMenu } from "react-icons/ai";
import MenuContext from "../../../Context/MenuContext";
import "./styles.scss";

export const BurgerMenu: React.FC<{}> = () => {
  // Importing the Menu context.
  const context = useContext(MenuContext);
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
    fontSize: "1.3rem",
  };
  // Defining an Array which will be mapped over in order to display the buttons.
  const linksArray = [
    { linkName: "עמוד הבית", path: "/" },
    { linkName: "הרשמה לשירות", path: "/registration" },
    { linkName: "שאלות ותשובות", path: "/faq" },
    { linkName: "קצת עלינו", path: "/about" },
    { linkName: "הסבר על התהליך", path: "/process" },
    // { linkName: "תקנון האתר", path: "/regulations" },
  ];
  return (
    <div>
      <Menu
        isOpen={context.isMenuOpen}
        onStateChange={(state) =>
          context.stateChangeHandler({ newState: state })
        }
        className="text-right"
        right
        styles={styles}
        burgerButtonClassName="customButton"
        customBurgerIcon={
          <AiOutlineMenu
            onClick={() => {
              context.toggleMenu();
              console.log("togglei");
            }}
            className="btn"
            size={30}
          />
        }
      >
        <motion.ul
          style={{ outline: "none" }}
          variants={animationHelpers.MenuAnimation}
          initial="hidden"
          animate={context.menuAnimation ? "visible" : "hidden"}
          className="text-center"
        >
          {linksArray.map((link, index) => (
            <div key={index++}>
              <motion.li
                style={btnStyle}
                onClick={() => {
                  context.closeMenu();
                  history.push(link.path);
                }}
                variants={animationHelpers.itemAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={decideStyle(link.path)}
              >
                {link.linkName}
                {index !== 5 ? <motion.hr className="bg-light" /> : null}
              </motion.li>
            </div>
          ))}
        </motion.ul>
      </Menu>
    </div>
  );
};
