import React, { useState, createRef, useEffect } from "react";
import "./style/style.scss";
import axios from "axios";
import faqPic from "../../assets/question.svg";

export const FrequentlyAsked: React.FC = () => {
  return (
    <div className="faqMain container ">
      <div className="faqHeader">
        <h1 className="p-1">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="p-1">חשבנו על כמה מהן וענינו לכם מראש ;)</span>
      </div>
      <div className="faqContent mb-5">
        <p className="text-right">
          <b>זה בחינם?</b> לחלוטין. <b>למה?</b> ראשית, השירות הזה התחיל כעזרה
          לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא מבזבז על בדיקת בקשת האזרחות
          שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע לו את הבדיקה באופן
          אוטומטי. <br />
          <br />
          משם לקחתי את זה צעד קדימה, כפרויקט שגם יתרום לכלל. <br />
        </p>
        <p className="text-right">
          <b>אז איך נרשמים?</b> <br/> ההרשמה לשירות פשוטה ביותר, ונעשית באמצעות מספר
          המעקב וכתובת האימייל שלכם.
        </p>
        <p className="text-right">
          <b>איזה עדכונים אני אקבל ממכם?</b> <br/> אנו לא רוצים להעמיס עליכם בעדכונים
          מיותרים ולכן, נעדכן אותך רק בשינויים במצב הבקשה שלך. נשלח אליכם אימל
          מהסיבות הבאות:
          <ul>
            <li>כאשר הבקשה שלכם תתקדם – נדע להתריע לכם על כך</li>
            <li>
              - כאשר נדרשת התערבות מצדכם, כמו למשל, צורך בהשלמת מסמכים – נדע
              לזהות זאת ולשלוח לכם מייל בכדי להפנות את תשומת לבכם לעניין.
            </li>
            <li>
              סיום התהליך – <b> מזל טוב! </b> נברך אותם אתכם כאשר סיימתם את כל
              שבעת השלבים וכעת אתם אזרחים.
            </li>
          </ul>
        </p>
        <p className="text-right">
          <b>חוששים לשתף איתנו את מספר המעקב?</b> <br/> כמה מילים בנושא פרטיות – עניין
          הפרטיות הוא הדבר הראשון שחשבנו עליו והוא חשוב לנו מאוד. מספר המעקב
          שלכם אמנם נדרש, אבל יהיה גלוי אך ורק למנהל הפרויקט. <br /> אחסון
          הנתונים נעשה בצורה מאובטחת, ובוצעו כל ההתאמות בכדי להבטיח שמירה על
          פרטיותכם. <br /> אנו מתחייבים שלא לעשות שום שימוש בפרטים האישיים שלכם!
          <br />
          בכל שלב יהיה באפשרותכם להסיר את הרשמתכם לשירות.
        </p>
        <p className="text-right">
        <b> אני רוצה להסיר את הרשמתי. </b> <br/> חבל לנו שלא התרשמת לטובה. תוכל לבצע
        זאת בלינק הזה נשמח לקבל ממך גם משוב מדוע החלטת להסיר את הרשמתך.
      </p>
      </div>
      {/*<div className="faqBottom">*/}

      {/*</div>*/}
      <img
          className="mr-auto ml-5"
          src={faqPic}
          alt="frequentlyAsked"
      />
    </div>
  );
};
