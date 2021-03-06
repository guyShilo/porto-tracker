import React from "react";
import { motion } from "framer-motion";
import "./style/style.scss";
import { animationHelpers } from "src/Utils";
interface ViewStepProps {
  currentStep: any;
}

export const ViewStep: React.FC<ViewStepProps> = ({ currentStep }) => {
  const { step_name, steps_list } = currentStep;
  const { containerAnimation, itemAnimation, FadeInAnimation } = animationHelpers;
  return (
    <motion.div
      initial={FadeInAnimation.initialDefs}
      animate={FadeInAnimation.animationDefs}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 20,
      }}
      className="stepMainDiv"
    >
      <p>{step_name}</p>
      <hr className="bg-light" />
      <motion.ul
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="stepsList"
      >
        {steps_list.map((step: string) => (
          <motion.li variants={itemAnimation} className="stepListItem">
            {step}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
