import React, {useCallback, useEffect} from "react";
import {TrackingNumberProps} from '../Box/Box'

type Hook = (
    trackingNumber: TrackingNumberProps,
) => {
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
  const validate = useCallback(
      () => {
        handleValidation()
      },
      [trackingNumber],
  );

  const buildTrackingNumber = () => {
    const numbers = Object.values(trackingNumber.buildTrackingNum);
    return `${numbers[0]}-${numbers[1]}-${numbers[2]}`;
  };
  const finalNumber = buildTrackingNumber()
  const handleValidation = () => {
    let errors = {
      trackingError: "",
    };
    if (finalNumber.trim() === "") {
      errors.trackingError = "Tracking Number cannot be empty";
    } else {
      const regEx =/^[0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
      if (!finalNumber.match(regEx)) {
        errors.trackingError = "Tracking Number must contain only numbers";
      }
      if(finalNumber.length != 14) {
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
    validate()
  });

  return handleValidation();
};
