import React from "react";
import "./style/style.scss";
export const Button: React.FC<{
  showFunction: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => any;
}> = ({ showFunction, onClick }) => {
  return (
    <div className="mainButton m-2">
      <button onClick={() => {
              showFunction(true)
              onClick()
      }}>לחץ כדי להירשם</button>
    </div>
  );
};
