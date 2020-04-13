import React, { useState, useEffect } from "react";

type Hook = (
  emailState: string
) => {
  errors: {
    emailError: string;
  };
  isValid?: boolean;
};

interface Errors {
  emailError: string;
  isValid?: boolean;
}

export const useEmailValidator: Hook = (emailState) => {
  // The type of the value and function are inferred
  const handleValidation = () => {
    let errors = {
      emailError: "",
    };
    if (emailState.trim() === "") {
      errors.emailError = "Email cannot be empty";
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      if (!emailState.match(regEx)) {
        errors.emailError = "Email must be a valid email address";
      }
    }
    return {
      emailState,
      errors,
      isValid: errors.emailError.length < 5,
    };
  };

  useEffect(() => {
    handleValidation();
  }, [emailState]);

  return handleValidation();
};
