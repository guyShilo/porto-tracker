import React,{useEffect} from "react";

type Hook = (
  emailState: string
) => {
  emailState: string;
  errors: {
    emailError: string;
  };
  isValid: boolean;
};
interface Errors {
  emailError: string;
  isValid: boolean;
}
export const useEmailValidator: Hook = (emailState) => {
  // The type of the value and function are inferred
  const handleValidation = () => {
    let errors = {
      emailError: "",
    };
    // Checking whether the email is empty or not.
    if (emailState.trim() === "") {
      errors.emailError = "כתובת דוא״ל לא יכולה להיות ריק";
    } else {
      // Checking whether the email matching the regex.
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      if (!emailState.match(regEx)) {
        errors.emailError = "אימייל בפורמט לא תקין";
      }
    }
    return {
      emailState,
      errors,
      isValid: errors.emailError.length < 5,
    };
  };
  // Validate based on Email changes.
  useEffect(() => {
    handleValidation();
  }, [emailState]);
  return handleValidation();
};
