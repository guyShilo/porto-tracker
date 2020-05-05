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
    if (currentInputState.length >= 3 && isValid) return "text-success mt-4"; 
    if (currentInputState.length >= 3 && !isValid) return "text-danger mt-4"; 
    return "text-light mt-4";
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
