export interface TrackingNumberComponent {
  setState?: React.Dispatch<React.SetStateAction<any>>;
  // handleSubmit: (e: any, input: { boxOne: string; boxThree: string; boxTwo: string }) => void;
  handleSubmit: null;
  buildColors?: (
    validatedObject: {
      errors: {
        emailError?: string | undefined;
        trackingError?: string | undefined;
      };
      isValid?: boolean | undefined;
    },
    indicator: string
  ) => void;
  validatedObject: {
    errors: { trackingError: string };
    isValid?: boolean;
  };
}

export interface InputProps {
  setState?: React.Dispatch<React.SetStateAction<any>>;
  errors:
    | {
        emailError: string;
        isValid?: boolean | undefined;
      }
    | undefined;
  buildColors?: (
    validatedObject: {
      errors: {
        emailError?: string | undefined;
        trackingError?: string | undefined;
      };
      isValid?: boolean | undefined;
    },
    indicator: string
  ) => void;
  validatedObject: {
    emailState: string;
    errors: { emailError: string };
    isValid?: boolean | undefined;
  };
}
