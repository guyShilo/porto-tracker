import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import {animationHelpers} from "../../Utils";

export const ContentLinks: React.FC = () => {
    const variants = animationHelpers.createVariants('scale',0.9, 1);
  return (
    <div className="content-links">
      <motion.div variants={variants} initial="variantA" whileHover="variantB">
        <Link to="/registration">
          <Button onClick={() => null} label="להרשמה לחצו כאן" />
        </Link>
      </motion.div>
      <motion.div variants={variants} initial="variantA" whileHover="variantB">
          <Link to="/about">
        <Button label="קצת עלינו" onClick={() => null} />
        </Link>
      </motion.div>
      <motion.div variants={variants} initial="variantA" whileHover="variantB">
      <Link to="/faq">
        <Button label="שאלות ותשובות" onClick={() => null} />
        </Link>
      </motion.div>
    </div>
  );
};
