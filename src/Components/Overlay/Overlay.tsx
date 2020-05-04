import React from "react";
import "./style/style.scss";
import { GiExitDoor } from "react-icons/gi";
import { motion } from "framer-motion";
import { OverlayProps } from "./OverlayProps";
import { animationHelpers } from "src/Utils";

export const Overlay: React.FC<OverlayProps> = ({
  Component,
  currentState,
  hide,
  hideExitButton
}) => {
  
  return (
    <motion.div
      className="Modal"
    >
      <div className="d-flex justify-content-center mt-5">{Component}</div>
      <div className="w-100 text-center">
        {!hideExitButton ? <button onClick={() => hide(!currentState)} className="m-3 hide btn">
          <GiExitDoor className="text-light" size={40} />
          <small className="p-1 text-light"> חזרה לעמוד</small>
        </button> : null}
      </div>
    </motion.div>
  );
};
