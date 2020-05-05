import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { animationHelpers } from "src/Utils";
import { motion } from "framer-motion";

export const ValidIndicator: React.FC<{
  isValid: boolean | null;
  currentInputState: string
}> = ({ isValid, currentInputState }) => {
  const { FadeInAnimation } = animationHelpers;
  const returnClass = () => {
    if (currentInputState.length >= 3 && isValid) return "text-success mt-1"; 
    if (currentInputState.length >= 3 && !isValid) return "text-danger mt-1"; 
    return "d-none text-light mt-1";
  };
  return (
    <motion.div
      initial={FadeInAnimation.initialDefs}
      animate={FadeInAnimation.animationDefs}
      transition={FadeInAnimation.transitionDefs}
    >
      <AiFillCheckCircle className={returnClass()} size={38} />
    </motion.div>
  );
};
