import { useEffect, useCallback} from "react";

type Hook = (
  emailState: string
) => {
  emailState: string;
  errors: {
    emailError: string;
  };
  isValid: boolean;
};

export const useEmailValidator: Hook = (emailState) => {
  const handleValidation = useCallback(
      () => {
            // Initiating an empty error.
            let errors = {
              emailError: "",
            };
            console.log(emailState)
            // Checking whether the email is empty or not, if it is, assign an error.
            if (emailState.trim() === "") {
              errors.emailError = "כתובת דוא״ל לא יכולה להיות ריק";
            } else {
              const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
                // Checking whether the email matches the regex. If not, assign an error.
              if (!emailState.match(regEx)) {
                errors.emailError = "אימייל בפורמט לא תקין";
              }
            }
            // Return the final email, errors object, and boolean.
         return {
              emailState,
              errors,
              isValid: errors.emailError.length < 5,
        };
      }, [emailState]);
  // Validate based on Email changes.
  useEffect(() => {
    handleValidation();
  },[handleValidation]);

  return handleValidation();
};
