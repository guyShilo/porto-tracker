import React, {createContext} from 'react';

export default createContext({
    addEmail: email => {},
    addTrackCode: track_code => {},
    resetEmail: "",
    resetTrackCode: "",
    finalTrackCode: "",
    finalEmail: "",
    emailIsValid: {
      emailState: '',
      errors: {
        emailError: ''
      },
      isValid: false
    },
    trackCodeIsValid: {
      trackingNumber: '',
      errors: {
        trackingError: ''
      },
      isValid: false
    },
  });