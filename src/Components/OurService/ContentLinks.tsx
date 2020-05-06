import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { animationHelpers } from "../../Utils";

export const ContentLinks: React.FC = () => {
  const ButtonsArray = [
    { linkName: "להרשמה", path: "/registration" },
    { linkName: "קצת עלינו", path: "/about" },
    { linkName: "שאלות ותשובות", path: "/faq" },
  ];
  const { FadeInAnimation } = animationHelpers;
  return (
    <motion.div
      initial={FadeInAnimation.initialDefs}
      animate={FadeInAnimation.animationDefs}
      transition={FadeInAnimation.transitionDefs}
      className="content-links"
    >
      {ButtonsArray.map((eachButton, index) => (
        <motion.div
        key={index++}
          variants={animationHelpers.createVariants("scale", 0.9, 1)}
          initial="variantA"
          whileHover="variantB"
        >
          <Link to={eachButton.path}>
            <Button onClick={() => null} label={eachButton.linkName} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
