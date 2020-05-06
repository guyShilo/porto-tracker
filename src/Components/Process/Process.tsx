import { Content } from "./Content";
import React from "react";
import "./style/style.scss";
import { ProgressBar } from "./ProgressBar";



export const Process: React.FC = () => {
  document.title = "PortuTrack | תהליך האזרחות";

  return (
    <div className="portoProcess">
      <div className="processHeader">
        <p className="text-center">
          הכנו לכם הסבר קצר על <b>תהליך הבקשה </b>לקבלת הדרכון הפורטוגלי
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <ProgressBar />
      </div>
      <Content/>
    </div>
  );
};
