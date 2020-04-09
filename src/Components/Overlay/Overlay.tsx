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
      <div className="closeBtn col-sm-12">
        <div className="col-sm-7">
          <button onClick={() => hide(!currentState)} className="hide btn">
            X
          </button>
        </div>
      </div>
      {Component}
    </div>
  );
};
