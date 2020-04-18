import React,{useState} from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import aboutUs from "../../assets/team.svg";

export const About: React.FC<{}> = ({}) => {
  document.title = "עלינו";
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="">
      <div className="aboutContainer p-3">
        <div className="aboutHeader row">
          <h1 className="text-light">אז קצת עלינו...</h1>
          <hr className="bg-light w-100" />
        </div>
        <div className="aboutContent row">
          <p className="flex-fill text-right text-light">
            PortuBot התחיל כעזרה לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא מבזבז
            <br />
            על בדיקת בקשת האזרחות שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע
            <br />
            לו את הבדיקה באופן אוטומטי.
            <br /> משם לקחתי את זה צעד קדימה, ועם עזרה של חבר טוב PortuBot הוא
            מה שהוא עכשיו.
          </p>
          <div className="aboutImage">
            <img src={aboutUs} alt="aboutUs" />
          </div>
        </div>
        <div className="text-center mt-3 p-2">
          <Link to="/registration">
            <Button
              label="לחץ להרשמה"
              showFunction={setShowSignUp}
              onClick={() => null}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
