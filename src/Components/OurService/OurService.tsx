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
          <h1>מחכים לדרכון פורטוגלי? תנו לעדכונים להגיע אליכם</h1>
          <span>
            קבלו עדכונים ישירות לאימייל האישי שלכם בסטטוס הבקשה הפורטוגלי.
            בחינם.
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
          <p className="content-heading text-center">שלום</p>
          <p className="text-center text-light">
            <b>
              באופן אוטומטי, מדי יום PortuTrack יתעדכן במצב תהליך הגשת הבקשה
              שלכם! <br />
            </b>
            מכיוון שאף אחד לא אוהב מיילים לא חשובים, PortuTrack יעדכן אתכם רק
            כשיש עדכון בתהליך שלכם.<br/> לאחר הרשמתכם לשירות, תוך 24 שעות, תקבלו מייל
            שמציין את מצבכם הנוכחי.<br/> החל ממייל זה, נמשיך לבדוק – אך נעדכן אתכם רק
            כאשר יהיה משהו חדש.<br/> ההרשמה פשוטה ביותר, למה אתם מחכים? <b>הישארו
            מעודכנים!</b>
          </p>
          <ContentLinks />
        </div>
      </div>
    </div>
  );
};
