export interface TrackingNumberComponent {
  currentState: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  // handleSubmit: (e: any, input: { boxOne: string; boxThree: string; boxTwo: string }) => void;
  handleSubmit: null;
  buildColors: (
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
    label: string;
    name: string;
    length: number;
    currentState: any;
    setState: React.Dispatch<React.SetStateAction<any>>;
    inputType: string;
    errors:
      | {
          emailError: string;
          isValid?: boolean | undefined;
        }
      | undefined;
    buildColors: (
      validatedObject: {
        errors: {
          emailError?: string | undefined;
          trackingError?: string | undefined;
        };
        isValid?: boolean | undefined;
      },
      indicator: string
    ) => void;
    validatedObject: { errors: { emailError: string }; isValid?: boolean };
  }
