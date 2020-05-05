import * as React from "react";
import messageSentImage from "./assets/messageSent.svg";
import messageFailed from "./assets/messageFailed.svg";


export const animationHelpers = {
  createVariants: (
    name: string,
    initialNumber: number,
    afterVariantNumber: number
  ) => {
      return {
        variantA: {
            [name]: initialNumber,
        },
        variantB: {
            [name]: afterVariantNumber,
        },
    };
  },
   containerAnimation: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
   itemAnimation: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    hover: {scale: 1.25}
  },
  FadeInAnimation : {
    initialDefs: {
       scale: 0, opacity: 0 
    },
    animationDefs: { opacity: 1, scale: 1 },
    transitionDefs: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    }
  },
  MenuAnimation: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
};

export const SwalFunctions = {
  swalSuccess: (func: any, history: any) =>
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
