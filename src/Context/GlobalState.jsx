import React, { useReducer, useEffect, useCallback } from "react";
import { useEmailValidator } from "../Components/InputValidators/EmailValidator";
import { useTrackingValidator } from "../Components/InputValidators/TrackingValidator";
import { globalReducer } from "../Components/Reducer";
import StateContext from "./StateContext";

const GlobalState = ({ children }) => {
  // Initiating the state.
  const initialState = {
    Email: "",
    TrackCode: "",
    emailIsValid: false,
    trackCodeIsValid: false,
  };
  // React use reducer method for state management.
  const [signUpState, dispatch] = useReducer(globalReducer, initialState);
  const { finalEmail, finalTrackCode } = signUpState;

  const addTrackCode = (value) => {
    setTimeout(() => {
      dispatch({ type: "ADD_TRACKCODE", value });
    }, 700);
  };

  const resetTrackCode = () => {
    setTimeout(() => {
      dispatch({ type: "RESET_TRACKCODE" });
    }, 700);
  };

  const addEmail = (value) => {
    setTimeout(() => {
      dispatch({ type: "ADD_EMAIL", value });
    }, 700);
  };

  // // returning errors object and isValid boolean, to handle UI errors. - Email
  const validatedEmail = useEmailValidator(finalEmail || initialState.Email);
  // // returning errors object and isValid boolean, to handle UI errors. - Tracking Number
  const validatedTrackingNumber = useTrackingValidator(
    finalTrackCode || initialState.TrackCode
  );
  const isOkToBuild = validatedEmail.isValid && validatedTrackingNumber.isValid;
  // Build new Email and Tracking Code after validation.
  const validateAndBuild = useCallback(() => {
    const Email = validatedEmail.emailState;
    const TrackCode = validatedTrackingNumber.trackingNumber;
    if ((validatedTrackingNumber.isValid && validatedEmail.isValid) === true) {
      return {
        Email,
        TrackCode,
        validatedEmail,
        validatedTrackingNumber,
      };
    } else {
      return initialState;
    }
    // eslint-disable-next-line
  }, [initialState]);

  // Building the state every time the Email and TrackCode changes.
  useEffect(() => {
    validateAndBuild();
    // eslint-disable-next-line
  }, [isOkToBuild]);

  return (
    <StateContext.Provider
      value={{
        finalEmail: validateAndBuild().Email,
        finalTrackCode: validateAndBuild().TrackCode,
        validatedEmail: validateAndBuild().validatedEmail || validatedEmail,
        validatedTrackingNumber:
          validateAndBuild().validatedTrackingNumber || validatedTrackingNumber,
        addEmail,
        addTrackCode,
        resetEmail: "",
        resetTrackCode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default GlobalState;
