import React from "react";
import "./style/style.scss";
import faqPic from "../../assets/questions.svg";
import { motion } from "framer-motion";
import { animationHelpers } from "../../Utils";
export const FrequentlyAsked: React.FC = () => {
  document.title = "PortuTrack | שאלות ותשובות";

  const { containerAnimation, itemAnimation } = animationHelpers;

  const listItems = [
    "כאשר הבקשה שלכם תתקדם – נדע להתריע לכם על כך.",
    " כאשר נדרשת התערבות מצדכם, כמו למשל, צורך בהשלמת מסמכים – נדע לזהות זאת ולשלוח לכם מייל בכדי להפנות את תשומת לבכם לעניין.",
    " סיום התהליך –  מזל טוב! נברך אתכם כאשר סיימתם את כל שבעת    השלבים וכעת אתם אזרחים.",
  ];

  return (
    <div className="faqMain">
      <div className="faqHeader">
        <h1 className="">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="">אספנו כמה שאלות חשובות וענינו עליהן מראש</span>
        {/* <hr className="bg-dark w-100" /> */}
      </div>
      <div className="faqContent">
        <p className="text-right">
          <b>זה בחינם?</b> לחלוטין. <b>למה?</b> השירות הזה התחיל כעזרה לקרוב
          משפחה, משם לקחנו את זה צעד קדימה, כפרויקט שגם יתרום לכלל. <br />
        </p>
        <motion.p variants={itemAnimation} className="text-right">
          <b>אז איך נרשמים?</b> <br /> ההרשמה לשירות פשוטה ביותר, ונעשית באמצעות
          מספר המעקב וכתובת האימייל שלכם.
        </motion.p>
        <p className="text-right">
          <b>איזה עדכונים אני אקבל ממכם?</b> <br /> אנו לא רוצים להעמיס עליכם
          בעדכונים מיותרים ולכן, נעדכן אותך רק בשינויים במצב הבקשה שלך. <br />{" "}
          נשלח אליכם אימל מהסיבות הבאות:
          <motion.ul
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            {listItems.map((item, index) => (
              <motion.li variants={itemAnimation} key={index}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </p>
        <p className="text-right">
          <b>אני חושש לשתף אתכם את המספר מעקב, מה לעשות?</b> כמה מילים בנושא
          פרטיות - הפרטיות היא עניין חשוב לנו. <br />
          מספר המעקב שלכם אמנם נדרש, אך גלוי אך ורק למנהל הפרויקט. <br />
          אחסון הנתונים נעשה בצורה מאובטחת, ונלקחו צעדים מתאימים בכדי להבטיח
          שמירה על פרטיותכם. <br />
          <br />
          אנו לעולם לא נעביר מידע אישי עליכם לאף גורם, ובכל שלב, יהיה באפשרותכם
          להסיר את הרשמתכם לשירות.
        </p>
        <p className="text-right flex-wrap">
          <b> לאיזה מידע חשוף מי שמקבל את המספר מעקב שלי? </b>
          המידע היחיד שניתן לקבל בעזרת מספר המעקב שלכם הוא: <br /> שמכם, מספר
          הבקשה לאזרחות, סטטוס הבקשה, והמשרד שמטפל בו בפורטוגל. <br />
          שום פרט נוסף אינו חשוף. בגדול, אפשר לומר ששום מידע רגיש אינו מגיע בכל
          מקרה.
        </p>
        <p className="text-right">
          <b> אני רוצה להסיר את הרשמתי. </b> <br /> חבל לנו שלא התרשמת לטובה.
          תוכל לבצע זאת בלינק הזה נשמח לקבל ממך גם משוב מדוע החלטת להסיר את
          הרשמתך.
        </p>
      </div>
      <img className="" src={faqPic} alt="frequentlyAsked" />
    </div>
  );
};
