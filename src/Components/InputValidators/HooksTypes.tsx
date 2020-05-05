export type TrackCodeValidationHook = (
    trackingNumber: string
) => {
    trackingNumber: string;
    errors: {
    trackingError: string;
    };
    isValid: boolean;
};

export type EmailValidationHook = (
    emailState: string
  ) => {
    emailState: string;
    errors: {
      emailError: string;
    };
    isValid: boolean;
  };