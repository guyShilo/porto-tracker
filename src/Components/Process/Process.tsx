import React from "react";
import "./style/style.scss";
import { ProgressBar } from "./ProgressBar";

export const Process: React.FC = () => {
  return (
    <div className="portoProcess">
      <div className="processHeader">
        <h1 className="text-center p-1">
          אז גם אתם רוצים להגשים את החלום הפורטוגלי?
        </h1>
        <p className="text-center">הכנו לכם הסבר קצר על התהליך הבקשה</p>
      </div>
      <div className="d-flex justify-content-center">
        <ProgressBar />
      </div>
    </div>
  );
};
