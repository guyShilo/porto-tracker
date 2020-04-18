import { ContentLinks } from "./ContentLinks";
import React from "react";
import "./style/style.scss";

export const OurService: React.FC = () => {
  const variants = {
    variantA: { scale: 0.9 },
    variantB: { scale: 1 },
  };
  return (
    <div>
      <div className="ourService">
        <div className="ourServiceHeader">
          <h1>בואו לגלות עולם של הזדמנויות חדשות</h1>
          <span>צאצאים למגורשי ספרד? יש לכם הזדמנות לדרכון פורטוגלי!</span>
        </div>
        <div className="ourSerivceContent">
          <p className="content-heading text-center">שלום לכם</p>
          <p className="text-center">
            <b>
              PortuBot יתעדכן במצב תהליך הגשת הבקשה שלכם <br />
            </b>
            מכיוון שאף אחד לא אוהב אימלים לא חשובים, PortuBot יעדכן אתכם רק כשיש
            עדכון בתהליך שלכם.
            <br />
            לאחר הרשמתכם לשירות, תוך 24 שעות, תקבלו מייל שמציין את מצבכם הנוכחי.
            <br />
            החל ממייל זה, נמשיך לבדוק מדי יום – אך נעדכן אתכם רק כאשר יהיה משהו
            חדש. ההרשמה פשוטה ביותר, למה אתם מחכים? הישארו מעודכנים!
          </p>
          <ContentLinks variants={variants} />
        </div>
      </div>
    </div>
  );
};
