import { useCallback, useEffect } from "react";
import {TrackCodeValidationHook} from './HooksTypes'

export const useTrackingValidator: TrackCodeValidationHook = (trackingNumber) => {
  const ValidateTrackCode = useCallback(() => {
    // Initiating an empty error.
    let errors = {
      trackingError: "",
    };
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
    // Checking the current state of the input to determine error and indicator display.
    const checkValidity = () => {
      if (errors.trackingError.length > 5 && trackingNumber.length === 2) {
        return true;
      } else if (
        errors.trackingError.length > 5 &&
        trackingNumber.length !== 2
      ) {
        return false;
      } else {
        return true;
      }
    };
    // Return the final number, errors object, and boolean.
    return {
      trackingNumber,
      errors,
      isValid: checkValidity(),
    };
  }, [trackingNumber]);
    // Validate based on Track Code changes.
  useEffect(() => {
    ValidateTrackCode();
  }, [ValidateTrackCode]);
  return ValidateTrackCode();
};
