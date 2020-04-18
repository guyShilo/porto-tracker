import React from "react";
import "./style/style.scss";
// interface OverlayProps {

// }

export const Overlay: React.FC<{
  Component: any;
  currentState: boolean;
  hide: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ Component, currentState, hide }) => {
  return (
    <div className="Modal">
      <div className="col-sm-12">
        <button onClick={() => hide(!currentState)} className="w-100 hide btn">
          X
        </button>
      </div>
      <div className="d-flex justify-content-center mt-5">{Component}</div>
    </div>
  );
};
