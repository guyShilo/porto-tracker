import * as React from "react";
import messageSentImage from "./assets/messageSent.svg";
import messageFailed from "./assets/messageFailed.svg";

export const animationHelpers = {
  createVariants: (
    name: string,
    initialNumber: number,
    afterVariantNumber: number
  ) => {
    const variants = {
      variantA: {
        [name]: initialNumber,
      },
      variantB: {
        [name]: afterVariantNumber,
      },
    };
    return variants;
  },
};

export const SwalFunctions = {
  swalSuccsess: (func: any, history: any) =>
    func
      .fire({
        title: <p>האימות עבר בהצלחה!</p>,
        html: (
          <div>
            <img className="w-50" src={messageSentImage} alt="signUpComplete" />
            <p>
              הרשמתך למערכת שלנו התבצעה בהצלחה. <br />
              מהיום, <b>כל יום</b>, אנחנו נבדוק בשבילך מה מצב הדרכון שלך!
              <br />
            </p>
          </div>
        ),
        icon: "success",
        confirmButtonColor: "#5cb85c",
        confirmButtonText: `חכו שנייה אני נסגר לבד`,
        timer: 8000,
      })
      .then(() => history.push("/service")),
  swalFailed: (
    errorMessage: {
      msgToUser: string;
      isValid: boolean;
    },
    func: any,
    history: any
  ) =>
    func
      .fire({
        title: (
          <p>
            לצערנו יש שגיאה
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/crying-face_1f622.png"
              className="w-25"
              alt="failed"
            />
          </p>
        ),
        html: (
          <div>
            <img className="w-50" src={messageFailed} alt="signUpComplete" />
            <p>{errorMessage.msgToUser}</p>
          </div>
        ),
        icon: "danger",
        confirmButtonColor: "#d9534f",
        confirmButtonText: `נצטרך להתחיל מההתחלה....`,
        timer: 8000,
      })
      .then(() => console.log(errorMessage)),
};
