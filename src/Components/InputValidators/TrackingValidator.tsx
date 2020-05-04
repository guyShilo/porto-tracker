import { useCallback, useEffect } from "react";

type Hook = (
  trackingNumber: string
) => {
  trackingNumber: string;
  errors: {
    trackingError: string;
  };
  isValid: boolean | null;
};

interface Errors {
  trackingError: string;
  isValid: boolean;
}

export const useTrackingValidator: Hook = (trackingNumber) => {
  const validate = useCallback(() => {
    // Initiating an empty error.
    let errors = {
      trackingError: "",
    };
    console.log(trackingNumber)
    // Checking whether the number is empty or not, if it is, assign an error.
    if (trackingNumber.trim() === "") {
      errors.trackingError = "מספר המעקב לא יכול להיות ריק";
    } else {
      const regEx = /^[0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
      // Checking whether the number matches the regex. If not, assign an error.
      if (!trackingNumber.match(regEx)) {
        errors.trackingError = "מספר המעקב יכול להכיל מספרים בלבד";
      }
      // Checking whether the number matches the correct length. If not, assign an error.
      if (trackingNumber.length !== 14) {
        errors.trackingError = "אורכו של מספר המעקב חייב להיות 12 תווים";
      }
    }
    // Return the final number, errors object, and boolean.
    return {
      trackingNumber,
      errors,
      isValid: errors.trackingError.length < 5,
    };
  }, [trackingNumber]);

  useEffect(() => {
    validate();
  }, [validate]);

  return validate();
};
