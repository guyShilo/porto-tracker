import React from "react";
import { ValidIndicator } from "../Button/ValidIndicator";
import { animationHelpers } from "src/Utils";
import { motion } from "framer-motion";

interface ErrorProps {
  validatedObject: {
    emailState: string;
    errors: {};
    isValid: boolean;
    trackingNumber: string;
  };
}

export const Error: React.FC<ErrorProps> = ({ validatedObject }) => {
  const { FadeInAnimation } = animationHelpers;
  const { emailState, trackingNumber, errors, isValid } = validatedObject;

  const stringParam = emailState || trackingNumber;
  // Checks the validity of inputs to determine color.
  const checkText = () => {
    if (!isValid) {
      return Object.values(errors);
    } else {
      if (stringParam === emailState) return "כתובת מייל תקינה";
      if (stringParam === trackingNumber) return "מספר מעקב תקין";
    }
    if (!isValid && stringParam !== (emailState || trackingNumber)) {
      return "error";
    }
  };

  // Defines the error and the valid hexa.
  const errorComponentStyle = {
    errorColor: "#dc3545",
    validColor: "#5cb85c",
  };
  const checkColor = () =>
    isValid ? errorComponentStyle.validColor : errorComponentStyle.errorColor;

  return (
    <motion.div
      initial={FadeInAnimation.initialDefs}
      animate={stringParam.length >= 3 ? FadeInAnimation.animationDefs : ""}
      transition={{ ...FadeInAnimation.transitionDefs, delayChildren: 0.5 }}
      className={checkColor()}
    >
      <small
        style={{
          color: checkColor(),
        }}
      >
        {checkText()}
      </small>
      <ValidIndicator
        isValid={validatedObject.isValid}
        currentInputState={
          validatedObject.emailState || validatedObject.trackingNumber
        }
      />
    </motion.div>
  );
};
