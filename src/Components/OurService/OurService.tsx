import React from "react";
import "./style/style.scss";
import backgroundImage from "../../assets/siteHeader.jpg";
import { ContentLinks } from "./ContentLinks";

export const OurService: React.FC = () => {
  document.title = "PortuTrack | ראשי";

  return (
    <div>
      <div className="ourService">
        <div className="ourServiceHeader">
          <h1>קבלו עדכונים שוטפים, במייל, באופן אוטומטי ובחינם.</h1>
          <span>
            עדכונים ישירות לאימייל האישי שלכם בסטטוס הבקשה של הדרכון הפורטוגלי.
          </span>
        </div>
        <img
          style={{
            width: "100vw",
            height: "90vh",
            zIndex: 1,
            position: "fixed",
          }}
          src={backgroundImage}
          alt="backgroundImage"
        />
        <div className="ourServiceContent">
          <p className="text-center content-heading-pt-2">
            באופן אוטומטי , מדי יום
            <span className="content-heading-pt-1 text-center m-1 p-1">
              PortuTrack
            </span>
            יתעדכן במצב תהליך הגשת הבקשה שלכם!
          </p>
          <p className="text-center text-light p-3">
            <br />
            אף אחד לא אוהב מיילים לא חשובים, אז אנחנו נעדכן אתכם רק כשיש עדכון
            בתהליך שלכם.
            <br /> לאחר הרשמתכם לשירות, תוך 24 שעות, תקבלו מייל שמציין את מצבכם
            הנוכחי.
            <br /> החל ממייל זה, נמשיך לבדוק – אך נעדכן אתכם רק כאשר יהיה משהו
            חדש.
            <br /> ההרשמה פשוטה ביותר, למה אתם מחכים? <b>הישארו מעודכנים!</b>
          </p>
          <ContentLinks />
        </div>
      </div>
    </div>
  );
};
