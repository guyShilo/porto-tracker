import React from "react";
import "./style/style.scss";
import { GiExitDoor } from "react-icons/gi";
import {motion} from 'framer-motion'
import { OverlayProps } from "./OverlayProps";

export const Overlay: React.FC<OverlayProps> = ({ Component, currentState, hide }) => {
  return (
    <motion.div initial={{opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 20,
    }}  className="Modal">
      <div className="w-100 text-center">
        <button onClick={() => hide(!currentState)} className="m-3 hide btn">
          <GiExitDoor className="text-light" size={40} />
          <small className="p-1 text-light"> חזרה לעמוד</small>
        </button>
      </div>
      <div className="d-flex justify-content-center mt-5">{Component}</div>
    </motion.div>
  );
};
