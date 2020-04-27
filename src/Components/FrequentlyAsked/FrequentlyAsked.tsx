import React from "react";
import "./style/style.scss";
import faqPic from "../../assets/question.svg";
import { motion } from "framer-motion";
import {animationHelpers} from '../../Utils'
export const FrequentlyAsked: React.FC = () => {
  const {containerAnimation, itemAnimation} = animationHelpers
  
  const listItems = [
    "כאשר הבקשה שלכם תתקדם – נדע להתריע לכם על כך.",
    " כאשר נדרשת התערבות מצדכם, כמו למשל, צורך בהשלמת מסמכים – נדע לזהות זאת ולשלוח לכם מייל בכדי להפנות את תשומת לבכם לעניין.",
    " סיום התהליך –  מזל טוב! נברך אתכם כאשר סיימתם את כל שבעת    השלבים וכעת אתם אזרחים.",
  ];

  return (
    <div className="faqMain">
      <div className="faqHeader">
        <h1 className="p-1">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="p-1">אספנו כמה שאלות חשובות וענינו עליהן מראש</span>
        {/* <hr className="bg-dark w-100" /> */}
      </div>
      <div className="faqContent">
        <p className="text-right">
          <b>זה בחינם?</b> לחלוטין. <b>למה?</b> ראשית, השירות הזה התחיל כעזרה
          לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא מבזבז על בדיקת בקשת האזרחות
          שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע לו את הבדיקה באופן
          אוטומטי. <br />
          משם לקחתי את זה צעד קדימה, כפרויקט שגם יתרום לכלל. <br />
        </p>
        <motion.p variants={itemAnimation} className="text-right">
          <b>אז איך נרשמים?</b> <br /> ההרשמה לשירות פשוטה ביותר, ונעשית באמצעות
          מספר המעקב וכתובת האימייל שלכם.
        </motion.p>
        <p className="text-right">
          <b>איזה עדכונים אני אקבל ממכם?</b> <br /> אנו לא רוצים להעמיס עליכם
          בעדכונים מיותרים ולכן, נעדכן אותך רק בשינויים במצב הבקשה שלך. נשלח
          אליכם אימל מהסיבות הבאות:
          <motion.ul variants={containerAnimation} initial="hidden" animate="visible">
            {listItems.map((item, index) => (
              <motion.li variants={itemAnimation} key={index}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </p>
        <p className="text-right">
          <b>חוששים לשתף איתנו את מספר המעקב?</b> <br /> כמה מילים בנושא פרטיות
          – עניין הפרטיות הוא הדבר הראשון שחשבנו עליו והוא חשוב לנו מאוד. מספר
          המעקב שלכם אמנם נדרש, אבל יהיה גלוי אך ורק למנהל הפרויקט. <br /> אחסון
          הנתונים נעשה בצורה מאובטחת, ובוצעו כל ההתאמות בכדי להבטיח שמירה על
          פרטיותכם. <br /> אנחנו מבטיחים שלא למסור לאף גורם את פרטיכם האישיים,
          ולא לעשות אף שימוש בהם שאינו קשור לעדכונכם במצב הבקשה שלכם.
          <br />
          בכל שלב יהיה באפשרותכם להסיר את הרשמתכם לשירות.
        </p>
        <p className="text-right">
          <b> אני רוצה להסיר את הרשמתי. </b> <br /> חבל לנו שלא התרשמת לטובה.
          תוכל לבצע זאת בלינק הזה נשמח לקבל ממך גם משוב מדוע החלטת להסיר את
          הרשמתך.
        </p>
      </div>
      {/*<div className="faqBottom">*/}

      {/*</div>*/}
      <img className="" src={faqPic} alt="frequentlyAsked" />
    </div>
  );
};
