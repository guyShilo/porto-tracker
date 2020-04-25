import React, { useCallback, useEffect } from "react";

type Hook = (
  trackingNumber: string
) => {
  trackingNumber: string;
  errors: {
    trackingError: string;
  };
  isValid: boolean | null
};

interface Errors {
  trackingError: string;
  isValid: boolean;
}

export const useTrackingValidator: Hook = (trackingNumber) => {

  const validate = useCallback(() => {
    handleValidation();
  }, [trackingNumber]);

  const handleValidation = () => {
    let errors = {
      trackingError: "",
    };
    if (trackingNumber.trim() === "") {
      errors.trackingError = "מספר המעקב לא יכול להיות ריק";
    } else {
      const regEx = /^[0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
      if (!trackingNumber.match(regEx)) {
        errors.trackingError = "מספר המעקב יכול להכיל מספרים בלבד";
      }
      if (trackingNumber.length != 14) {
        errors.trackingError = "אורכו של מספר המעקב חייב להיות 12 תווים";
      }
    }
    const decideIfValid = (stringParam: string) => {
      const isNotValid = stringParam !== '' && stringParam.length <= 5
      const isValid = stringParam === ''
      const deafultValue = null;
      if(isValid) {
        return true
      } else if (isNotValid) {
        return false
      } else return deafultValue
    }

    return {
      trackingNumber,
      errors,
      isValid: errors.trackingError.length < 5,
    };
  };

  useEffect(() => {
    validate();
  });

  return handleValidation();
};