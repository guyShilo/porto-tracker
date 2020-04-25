import React, { useReducer, useEffect } from "react";
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
  // React use reducer method for state managment.
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
  // returning errors object and isValid boolean, to handle UI errors. - Email
  const validatedEmail = useEmailValidator(finalEmail || "");
  // returning errors object and isValid boolean, to handle UI errors. - Tracking Number
  const validatedTrackingNumber = useTrackingValidator(finalTrackCode || "");
  // Build new Email and Tracking Code after validation.
  const validateAndBuild = () => {
    const Email = validatedEmail.emailState;
    const TrackCode = validatedTrackingNumber.trackingNumber;
    if ((validatedTrackingNumber.trackingNumber && validatedEmail.emailState) !== '') {
      console.log('is not empty')
      return {
        Email,
        TrackCode,
      };
    } else {
      return initialState;
    }
  };
  // Building the state everytime the Email and TrackCode changes.
  useEffect(() => {
    validateAndBuild();
  }, [finalEmail, finalTrackCode]);

  return (
    <StateContext.Provider
      value={{
        finalEmail: validateAndBuild().Email || initialState.Email,
        finalTrackCode: validateAndBuild().TrackCode || initialState.TrackCode,
        addEmail,
        addTrackCode,
        resetEmail: "",
        resetTrackCode,
        emailIsValid: validatedEmail,
        trackCodeIsValid: validatedTrackingNumber,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default GlobalState;
