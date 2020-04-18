import React, { useCallback, useEffect } from "react";
import { TrackingNumberProps } from "../Box/interface";

type Hook = (
  trackingNumber: TrackingNumberProps
) => {
  finalNumber: string;
  errors: {
    trackingError: string;
  };
  isValid?: boolean;
};

interface Errors {
  trackingError: string;
  isValid?: boolean;
}

export const useTrackingValidator: Hook = (trackingNumber) => {
  const validate = useCallback(() => {
    handleValidation();
  }, [trackingNumber]);

  const buildTrackingNumber = () => {
    console.log(trackingNumber)
    const numbers = Object.values(trackingNumber.buildTrackingNum);
    return `${numbers[2]}-${numbers[1]}-${numbers[0]}`;
  };

  const finalNumber = buildTrackingNumber();
  const handleValidation = () => {
    let errors = {
      trackingError: "",
    };
    if (finalNumber.trim() === "") {
      errors.trackingError = "Tracking Number cannot be empty";
    } else {
      const regEx = /^[0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
      if (!finalNumber.match(regEx)) {
        errors.trackingError = "Tracking Number must contain only numbers";
      }
      if (finalNumber.length != 14) {
        errors.trackingError = "Length is wrong";
      }
    }
    return {
      finalNumber,
      errors,
      isValid: errors.trackingError.length < 5,
    };
  };

  useEffect(() => {
    validate();
  });

  return handleValidation();
};
