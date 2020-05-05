import React, { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Redirect } from "react-router-dom";

export const Regulations: React.FC = () => {
  return (
    <div className="container">
      <br />
      <div className="d-flex justify-content center p-4 flex-wrap">
        <h1> תנאי שימוש באתר "PortuTrack" </h1>
        <ol style={{ fontFamily: "sans-serif" }} className="text-right">
          <br />
          תקנון השימוש באתר הנ"ל נכתב בלשון זכר אך הכתוב בו מתייחס לנשים וגברים
          כאחד. <br />
          <li >
            <b>קדימון</b> <br />
            אתר "PortuTrack" (להלן "האתר") הוא אתר המשתמש כאתר (עדכונים עבור
            סטטוס הבקשה לאזרחות פורטוגלית) ייצוגי עבור "PortuTrack" והנך מוזמן
            לקחת בו חלק בכפוף להסכמתך לתנאי השימוש אשר יפורטו להלן. בנוסף השימוש
            באתר זה על כל תכניו והשירותים המוצעים בו, הורדות של קבצים, מדיה כגון
            תמונות וסרטונים והתכנים השונים המוצעים לקהל המבקרים עשויים להשתנות
            מעת לעת או בהתאם לסוג התוכן. הנהלת האתר שומרת לעצמה הזכות לעדכן את
            תנאי השימוש המוצגים להלן מעת לעת וללא התראה או אזכור מיוחד בערוצי
            האתר השונים. <br />
          </li>
          <li>
            <b>קניין רוחני</b> <br />
            האתר כמו גם כל המידע שבו לרבות עיצוב האתר, קוד האתר, קבצי מדיה לרבות
            גרפיקות, סרטונים, תמונות, טקסטים, קבצים המוצעים להורדה וכל חומר אחר
            אשר מוצג באתר שייכים במלואם לאתר הנ"ל ומהווים קניין רוחני בלעדי של
            אתר "PortuTrack" ואין לעשות בהם שימוש ללא אישור כתוב מראש מאתר "
            PortuTrack" בנוסף אין להפיץ, להעתיק, לשכפל, לפרסם, לחקות או לעבד
            פיסות קוד, גרפיקות, סרטונים, סימנים מסחריים או כל מדיה ותוכן אחר
            מבלי שיש ברשותכם אישור כתוב מראש. <br />
          </li>
          <li>
            <b>תוכן האתר</b> <br />
            אנו שואפים לספק לכם את המידע המוצג באתר ללא הפרעות אך יתכנו בשל
            שיקולים טכניים, תקלות צד ג׳ או אחרים, הפרעות בזמינות האתר. ולכן
            איננו יכולים להתחייב כי האתר יהיה זמין לכם בכל עת ולא יינתן כל פיצוי
            כספי או אחר בשל הפסקת השירות / הורדת האתר. קישורים לאתר חיצוניים
            אינם מהווים ערובה כי מדובר באתרים בטוחים, איכותיים או אמינים וביקור
            בהם נעשה על דעתכם האישית בלבד ונמצאים בתחום האחריות הבלעדי של המשתמש
            באתר. התכנים המוצעים באתר הינם בבעלותם הבלעדית של "PortuTrack" ואין
            לעשות בהם שימוש אשר נועד את האמור בתקנון זה (ראה סעיף 3) למעט במקרים
            בהם צוין אחרת או במקרים בהם צוין כי זכויות היוצרים שייכים לגוף
            חיצוני. במקרים אלו יש לבדוק מהם תנאי השימוש בקישור המצורף ולפעול על
            פי המצוין באתר החיצוני לו שייכים התכנים. <br />
          </li>
          <li>
            <b>ניהול משתמשים ומבקרים באתר</b> <br />
            הנהלת האתר שומרת לעצמה את הזכות לחסום כל משתמש ובין אם על ידי חסימת
            כתובת הIP של המחשב שלו, כתובת הMACID של המחשב שלו או אפילו בהתאם
            למדינת המוצא ללא צורך לספק תירוץ אשר מקובל על הגולש. <br />
            צוות האתר / הנהלת האתר יעשה כל שביכולתו להגן על פרטי המשתמשים
            הרשומים באתר / מנויים הרשומים באתר. במקרים בהם יעלה בידיו של צד
            שלישי להשיג גישה למידע מוסכם בזאת כי לגולשים, משתמשים וחברים באתר לא
            תהה כל תביעה, טענה או דרישה כלפי צוות האתר " PortuTrack". הנהלת האתר
            שומרת לעצמה את הזכות להסיר משירות כל משתמש על פי שיקול דעתה, וללא
            מתן התראה או הסבר. הנהלת האתר שומרת לעצמה את הזכות להפסיק את השירות
            – כולו או חלקו על פי שיקול דעתה, וללא מתן התראה או הסבר. <br />
          </li>
          <li>
            <b>גילוי נאות</b> <br />
            באתר זה עשוי לעשות שימוש בקבצי קוקיז (במיוחד עבור משתמשים רשומים
            ומנויים) ובממשקי סטטיסטיקה פנימיים בכדי לשמור תיעוד סטטיסטי אנונימי
            של גולשים וניתוח תנועת הגולש/ים, הרגלי גלישה באתר וניתוח קליקים וזמן
            שהייה. בכל העת ולבד מאשר גולשים המחוברים לאתר המידע הנשמר הוא
            אנונימי לחלוטין ואין בו את שם הגולש או כל פרט מזהה אחר. בהרשמה
            לשירות מובן לנרשם כי המידע המתקבל על ידו יהיה חשוף להנהלת האתר.
            הנהלת האתר מבטיחה שלא תמסור מידע האישי של הגולש/ים ו/או הנרשמים
            לשירות. <br />
          </li>
          <li>
            <b>אזור שיפוט</b> <br />
            בעת שאתם עושים שימוש באתר ובמקרה בו התגלעה כל מחולקת אתם מסכימים
            להלן כי האמור לעיל נמצא תחת סמכות השיפוט הבלעדי של החוק הישראלי תוך
            שימוש במערכת בתי המשפט הישראליים בלבד במחוז תל אביב.
          </li>
        </ol>
      </div>
    </div>
  );
};
