import { useEffect, useCallback } from "react";
import {EmailValidationHook} from './HooksTypes'

export const useEmailValidator: EmailValidationHook = (emailState) => {
  const ValidateEmail = useCallback(() => {
    // Initiating an empty error.
    let errors = {
      emailError: "",
    };
    // Checking whether the email is empty or not, if it is, assign an error.
    if (emailState.trim() === "") {
      errors.emailError = "כתובת דוא״ל לא יכולה להיות ריקה";
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      // Checking whether the email matches the regex. If not, assign an error.
      if (!emailState.match(regEx)) {
        errors.emailError = "אימייל בפורמט לא תקין";
      }
    }
    // Checking the current state of the input to determine error and indicator display.
    const checkValidity = () => {
      if (errors.emailError.length > 5 && emailState.length === 0) {
        return false;
      } else if (errors.emailError.length > 5 && emailState.length !== 0) {
        return false;
      } else if (errors.emailError = "") {
        return true
      }
      else {
        return true
      }
    };
    // Return the final email, errors object, and boolean.
    return {
      emailState,
      errors,
      isValid: checkValidity(),
    };
  },[emailState])
  // Validate based on Email changes.
  useEffect(() => {
    ValidateEmail();
  }, [ValidateEmail]);
  return ValidateEmail();
};
