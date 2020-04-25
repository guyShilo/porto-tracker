import React, { useState, createRef, useEffect } from "react";
import "./style/style.scss";
import axios from "axios";
import { Question } from "./Question";
import faqPic from "../../assets/question.svg";

export const FrequentlyAsked: React.FC = () => {
  // Initiating the questions array.
  const [faqState, setFaqState] = useState([]);
  // Decides whether or not to show the answer.
  const [seeAnswer, setSeeAnswer] = useState(false);
  // Current answer based on the current index of the questions array.
  const [currentAnswer, setCurrentAnswer] = useState("");
  // Makes an API call from the server.
  // const getQuestions = async () => {
  //   try {
  //     const request = axios.get("http://173.255.115.65/getQA");
  //     const response = await (await request).data;
  //     console.log(response);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };
  // Initiating Div element ref.
  const ref = createRef<HTMLDivElement>();
  // if boolParam !== falsy, and param matches currentAnswer(index), show question.
  const setQuestion = (boolParam: boolean, param: string) => {
    console.log(boolParam, param, currentAnswer);
    if (boolParam && currentAnswer === param) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };
  // Before component first render it makes an API Call
  // useEffect(() => {
  //   getQuestions();
  //   return () => {
  //     getQuestions();
  //   };
  // }, []);
  const questions = [
    {
      question: "זה בחינם? לחלוטין. למה?",
      answer:
        "ראשית, השירות הזה התחיל כעזרה לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא מבזבז על בדיקת בקשת האזרחות שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע לו את הבדיקה באופן אוטומטי. משם לקחתי את זה צעד קדימה, כפרויקט שגם יתרום לכלל",
    },
    {
      question: "איך נרשמים? ",
      answer:
        "ההרשמה לשירות פשוטה ביותר, ונעשית באמצעות ה מספר המעקב וכתובת האימל שלכם.",
    },
    {
      question: "איזה עדכונים אני אקבל ממכם? ",
      answer:
        "אנו לא רוצים להעמיס עליכם בעדכונים מיותר ולכן, נעדכן אותך רק בשינויים במצב הבקשה שלך. נשלח אליכם אימל מהסיבות הבאות:",
    },
    {
      question: "ddddd",
      answer: "xxxx",
    },
    {
      question: "ddddd",
      answer: "xxxx",
    },
    {
      question: "ddddd",
      answer: "xxxx",
    },
    {
      question: "ddddd",
      answer: "xxxx",
    },
    {
      question: "ddddd",
      answer: "xxxx",
    },
  ];
  return (
    <div className="faqMain container ">
      <div className="faqHeader w-100">
        <h1 className="p-1">אז אנחנו מניחים שיש לכם קצת שאלות....</h1>
        <span className="p-1">חשבנו על כמה מהן וענינו לכם מראש ;)</span>
      </div>
      <div className="h-75 mb-5">
        <p className="text-right">
          <b>זה בחינם?</b> לחלוטין. <b>למה?</b> ראשית, השירות הזה התחיל כעזרה
          לקרוב משפחה, שלא יכולתי לראות כמה זמן הוא מבזבז על בדיקת בקשת האזרחות
          שלו באתר. כך יצא שכתבתי עבורו אפליקציה שתבצע לו את הבדיקה באופן
          אוטומטי. <br />
          <br />
          משם לקחתי את זה צעד קדימה, כפרויקט שגם יתרום לכלל. <br />
        </p>
        <p className="text-right">
          <b>אז איך נרשמים?</b> ההרשמה לשירות פשוטה ביותר, ונעשית באמצעות מספר
          המעקב וכתובת האימייל שלכם.
        </p>
        <p className="text-right">
          <b>איזה עדכונים אני אקבל ממכם?</b> אנו לא רוצים להעמיס עליכם בעדכונים
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
          <b>חוששים לשתף איתנו את מספר המעקב?</b> כמה מילים בנושא פרטיות – עניין
          הפרטיות הוא הדבר הראשון שחשבנו עליו והוא חשוב לנו מאוד. מספר המעקב
          שלכם אמנם נדרש, אבל יהיה גלוי אך ורק למנהל הפרויקט. <br /> אחסון
          הנתונים נעשה בצורה מאובטחת, ובוצעו כל ההתאמות בכדי להבטיח שמירה על
          פרטיותכם. <br /> אנו מתחייבים שלא לעשות שום שימוש בפרטים האישיים שלכם!
          <br />
          בכל שלב יהיה באפשרותכם להסיר את הרשמתכם לשירות.
        </p>
        <p className="text-right">
        <b> אני רוצה להסיר את הרשמתי. </b>חבל לנו שלא התרשמת לטובה. תוכל לבצע
        זאת בלינק הזה נשמח לקבל ממך גם משוב מדוע החלטת להסיר את הרשמתך.
      </p>
      </div>
      <div className="faqBottom">
        <img
          className="mr-auto ml-5"
          src={faqPic}
          alt="frequentlyAsked"
        />
      </div>
    </div>
  );
};
