import React from "react";
import { motion } from "framer-motion";
import { Developers } from "./Developers";
import { animationHelpers } from "src/Utils";
import aboutUsAlt from "../../assets/upToDate.svg";
import "./style/style.scss";
const NadavsLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C5603AQH_HYYqC_kRuA/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=qXLJY4ig3Yf1hqCcH1rchBl6KNvw80q61Wg5wCAKhus";
const GuysLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C4E03AQGFX8l9rHPNCg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=29CJcwhKzIrpdWvUv4h4UPMPzliwm0mTdutXfJz_4Io";

export const About: React.FC = () => {
  document.title = "PortuTrack | קצת עלינו";

  const profileImgStyle = {
    borderRadius: "50%",
    border: "3px solid white",
    width: "45%",
    margin: "auto",
  };
  // Extracting the fade in animation from the utils file.
  const {FadeInAnimation} = animationHelpers
  return (
    <div className="">
      <div className="aboutContainer">
        <div className="aboutHeader">
          <h1 className="">אז קצת עלינו...</h1>
        </div>
        <div className="aboutContent">
          <div className="content-text flex-fill">
            <p>
              <b>PortuTrack</b> התחיל כעזרה לקרוב משפחה, שלא יכולתי לראות כמה
              זמן הוא מבזבז
              <br />
              על בדיקת בקשת האזרחות שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע
              לו את הבדיקה באופן אוטומטי.
              <br /> משם לקחתי את זה צעד קדימה, ועוד כמה צעדים, ויחד עם עזרה של
              חברים טובים, תוך כדי למידה, מסירות, והנאה - <b>PortuTrack</b>{" "}
              נוצר.
              <br />
              <br />
              חשוב שתדעו, השירות <b>PortuTrack</b> ניתן ללא תמורה ותחת הוצאות
              תחזוקה.
            </p>
          </div>
        </div>
        <Developers
          profileImgStyle={profileImgStyle}
          NadavsLinkedIn={NadavsLinkedIn}
          GuysLinkedIn={GuysLinkedIn}
        />
        <motion.div className="aboutImage">
          <motion.img
            initial={FadeInAnimation.initialDefs}
            animate={FadeInAnimation.animationDefs}
            transition={FadeInAnimation.transitionDefs}
            src={aboutUsAlt}
            alt="aboutUs"
          />
        </motion.div>
      </div>
    </div>
  );
};
