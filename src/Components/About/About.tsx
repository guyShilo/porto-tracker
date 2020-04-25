import React, { useState } from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import aboutUs from "../../assets/team.svg";
import { AiFillLinkedin } from "react-icons/ai";

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
          <div className="flex-fill text-right text-light">
            <p>
              PortuBot התחיל כעזרה לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא
              מבזבז
              <br />
              על בדיקת בקשת האזרחות שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע
              <br />
              לו את הבדיקה באופן אוטומטי.
              <br /> משם לקחתי את זה צעד קדימה, ועם עזרה של חבר טוב PortuBot הוא
              מה שהוא עכשיו.
            </p>
            <hr className="bg-light" />
            <section className="d-flex justify-content-around">
              <div className="aboutDeveloper d-flex align-items-center flex-column">
                <div className="row">
                  <p className="">שם המפתח</p>
                </div>
                <div className="row">
                  <p className="">משפט קטן על אותו מפתח</p>
                </div>
                <div className="row">
                  <AiFillLinkedin className="" size="30" />
                </div>
              </div>
              <div className="aboutDeveloper d-flex align-items-center flex-column">
                <div className="row">
                  <p className="">שם המפתח</p>
                </div>
                <div className="row">
                  <p className="">משפט קטן על אותו מפתח</p>
                </div>
                <div className="row">
                  <AiFillLinkedin className="" size="30" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="aboutImage">
          <img src={aboutUs} alt="aboutUs" />
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
