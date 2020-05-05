import {createContext} from 'react';
// Create the Context and export it.
export default createContext({
    addEmail: email => {},
    addTrackCode: track_code => {},
    resetEmail: "",
    resetTrackCode: "",
    finalTrackCode: "",
    finalEmail: "",
    validatedEmail: {
      emailState: '',
      errors: {
        emailError: ''
      },
      isValid: false
    },
    validatedTrackingNumber: {
      trackingNumber: '',
      errors: {
        trackingError: ''
      },
      isValid: false
    },
  });