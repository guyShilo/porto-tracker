import React from "react";
import "./style/style.scss";
interface ProgressBarProps {
  
}

export const ProgressBar: React.FC<ProgressBarProps> = ({}) => {
  return (
    <div className="progressBarContainer">
      <p className="text-light text-center">
        לחצו על שלב הבקשה הנוכחי שקיבלתם מ PortuTrack באימייל
      </p>
      <section className="stepIndicator">
        <div className="eachStep step1 active-1">
          <div className="stepIcon">1</div>
          <p>הבקשה התקבלה</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step2 active-1">
          <div className="stepIcon">2</div>
          <p>רישום הבקשה</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step3 active-1">
          <div className="stepIcon">3</div>
          <p>עיבוד הבקשה</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step4 active-3">
          <div className="stepIcon">4</div>
          <p>אימות מסמכים</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step5 active-2">
          <div className="stepIcon">5</div>
          <p>הבקשה באנליזה</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step6 active-2">
          <div className="stepIcon">6</div>
          <p>קבלת החלטה</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="eachStep step7 active-2">
          <div className="stepIcon">7</div>
          <p>רישום האזרחות</p>
        </div>
      </section>
    </div>
  );
};
