import React, { useState } from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import aboutUs from "../../assets/team.svg";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { animationHelpers } from "../../Utils";
const NadavsLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C5603AQH_HYYqC_kRuA/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=qXLJY4ig3Yf1hqCcH1rchBl6KNvw80q61Wg5wCAKhus";
const GuysLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C4E03AQGFX8l9rHPNCg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=29CJcwhKzIrpdWvUv4h4UPMPzliwm0mTdutXfJz_4Io";

export const About: React.FC<{}> = ({}) => {
  document.title = "עלינו";

  const [showSignUp, setShowSignUp] = useState(false);
  const profileImgStyle = {
    borderRadius: "50%",
    border: '3px solid white',
    width: "45%",
    margin: "auto",
  };
  return (
    <div className="">
      <div className="aboutContainer p-3">
        <div className="aboutHeader row">
          <h1 className="text-light">אז קצת עלינו...</h1>
          <hr className="bg-light w-100" />
        </div>
        <div className="aboutContent row">
          <div className="flex-fill text-right mr-4 text-light">
            <p>
              PortuBot התחיל כעזרה לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא
              מבזבז
              <br />
              על בדיקת בקשת האזרחות שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע
              <br />
              לו את הבדיקה באופן אוטומטי.
              <br /> משם לקחתי את זה צעד קדימה, ועם עזרה של חבר טוב PortuBot הוא
              מה שהוא עכשיו.
              <br />
              חשוב שתדעו, השירות PortuTrackניתן ללא תמורה ותחת הוצאות תחזוקה.
            </p>
            <hr className="bg-light" />
            <section className="developers d-flex justify-content-around">
              <div className="aboutDeveloper d-flex align-items-center flex-column">
                <div className="row">
                  <p>
                    <b>נדב טרגן</b>
                  </p>
                </div>
                <motion.div
                  className="row p-1"
                  variants={animationHelpers.createVariants("scale", 1, 1.15)}
                  initial="variantA"
                  whileHover="variantB"
                >
                  <img
                    style={profileImgStyle}
                    src={NadavsLinkedIn}
                    alt="NadavsLinkedIn"
                  />
                </motion.div>
                <div className="row">
                  <p className="flex-fill text-center">
                    מקים השירות - <br />
                    מתכנת העוסק בפיתוח תוכנה ובפרט בשירותי אוטומציה, <br />{" "}
                    סטודנט מצטיין למדעי המחשב וצאצא למגורשי ספרד.
                  </p>
                </div>
                <motion.div
                  className="row"
                  variants={animationHelpers.createVariants("scale", 1, 1.35)}
                  initial="variantA"
                  whileHover="variantB"
                >
                  <a
                    className="text-light"
                    href="https://www.linkedin.com/in/nadavtaragan/"
                    target="_blank"
                  >
                    <AiFillLinkedin size={40} />
                  </a>
                </motion.div>
              </div>
              <div className="aboutDeveloper d-flex align-items-center flex-column">
                <div className="row">
                  <p className="">
                    <b>גיא שילה</b>
                  </p>
                </div>
                <motion.div
                  variants={animationHelpers.createVariants("scale", 1, 1.15)}
                  initial="variantA"
                  whileHover="variantB"
                  className="row p-1"
                >
                  <img
                    style={profileImgStyle}
                    src={GuysLinkedIn}
                    alt="GuysLinkedIn"
                  />
                </motion.div>
                <div className="row">
                  <p className="flex-fill text-center">
                    מפתח צד לקוח - <br />
                    מתכנת FullStack.
                    <br/>
                    בוגר NetCraft Academy.
                  </p>
                </div>
                <motion.div
                  className="row"
                  variants={animationHelpers.createVariants("scale", 1, 1.35)}
                  initial="variantA"
                  whileHover="variantB"
                >
                  <a
                    className="text-light"
                    href="https://www.linkedin.com/in/guyshilo/"
                    target="_blank"
                  >
                    <AiFillLinkedin size={40} />
                  </a>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
        <div className="aboutImage">
          <img src={aboutUs} alt="aboutUs" />
        </div>
        <div className="aboutButton text-center mt-3 p-2">
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
