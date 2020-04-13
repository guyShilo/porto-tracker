import React from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import {Link} from "react-router-dom";
export const About: React.FC<{}> = ({}) => {
  document.title = "עלינו";
  const [showSignUp, setShowSignUp] = React.useState(false);
  return (
    <div className="">
      <div className="aboutContainer p-2">
        <h1 className="text-right text-light text-bold">אז קצת עלינו...</h1>
        <hr className="bg-light w-100" />
        <p className="text-right text-light">
          הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט
          <br />
          סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה
          <br />
          אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם
          את הקפיצה לתוך ההדפסה <br />
          האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60
          עם ההוצאה לאור של גליון פונטי
          <br /> המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה
          <br /> עם פרסום תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות
          של Lorem Ipsum.
        </p>
        <p className="text-right text-light">
          הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט
          <br />
          סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה
          <br />
          אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם
          את הקפיצה לתוך ההדפסה <br />
          האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60
          עם ההוצאה לאור של גליון פונטי
          <br /> המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה
          <br /> עם פרסום תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות
          של Lorem Ipsum.
        </p>
        <div className="text-center mt-3 p-2">
          <Link to="/">
            <Button showFunction={setShowSignUp} onClick={() => null} />
          </Link>
        </div>
      </div>
    </div>
  );
};
