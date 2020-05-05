import React, { useEffect, useState, useCallback } from "react";
import "./style/style.scss";
import { ButtonProps } from "./ButtonProps";
import { motion } from "framer-motion";
import { animationHelpers } from "src/Utils";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  isDisabled,
  label,
}) => {
  const [disabled, setDisabled] = useState(false);
  // If the string length IS NOT VALID - disable the submit button. - used with recaptcha
  const whichButton = () =>
    disabled ? "disabledButton m-2" : "mainButton m-2";
  const handleDisabled = useCallback(() => {
    if (isDisabled) setDisabled(true);
    else setDisabled(false);
  }, [isDisabled]);
  useEffect(() => {
    handleDisabled();
    return () => {
      handleDisabled();
    };
  }, [handleDisabled, isDisabled]);
  return (
    <>
      <motion.div
        className={whichButton()}
        variants={animationHelpers.createVariants("scale", 0.95, 1.1)}
        initial="variantA"
        whileHover="variantB"
        whileTap={{scale: 0.9}}
      >
        <button
          disabled={disabled}
          onClick={() => {
            onClick();
          }}
        >
          {label}
        </button>
      </motion.div>
    </>
  );
};
