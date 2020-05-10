import React from "react";
import { motion } from "framer-motion";
import { Developers } from "./Developers";
import { animationHelpers } from "src/Utils";
import aboutUsAlt from "../../assets/upToDate.svg";
import "./style/style.scss";

export const About: React.FC = () => {
  document.title = "PortuTrack | קצת עלינו";

  // Extracting the fade in animation from the utils file.
  const { FadeInAnimation } = animationHelpers;
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
              <br />
              <a
                className="text-light"
                href="mailto:nadav.tarago@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small style={{ fontWeight: "bold" }}>
                  לשיתופי פעולה עסקיים - צרו קשר במייל nadav.tarago@gmail.com
                </small>
              </a>
            </p>
          </div>
        </div>
        <Developers />
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
