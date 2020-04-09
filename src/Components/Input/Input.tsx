import React from "react";
import "./style/style.scss";
import { useEmailValidator } from "../InputValidators/EmailValidator";
import { ValidIndicator } from "../Button/ValidIndicator";
interface InputProps {
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
  buildColors: (validatedObject: { errors: {
      emailError?: string | undefined;
      trackingError?: string | undefined; };
      isValid?: boolean | undefined; }) => void
  validatedObject:{errors: {emailError: string}, isValid?: boolean};
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  length,
  currentState,
  setState,
  inputType,
  errors,
  buildColors,
  validatedObject
}) => {
  const [showError, setShowError] = React.useState(false);

  const handleChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    buildColors(validatedObject);
    const value = e.target.value;
    if (input === "email") {
      setState(value);
    } else {
      setState({
        [input]: value,
      });
    }
  };
  return (
    <div className="p-2 m-1">
        <div className="mainInput d-flex flex-column">
          <p className="text-bold text-center text-light">{label}</p>
          <div
            className="text-center"
            style={
              errors  && currentState.length < 5
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <small className="text-light text-center">{errors?.emailError}</small>
          </div>
          <input
            onChange={handleChange("email")}
            className="text-center"
            type={inputType}
            maxLength={length}
          />

      </div>
    </div>
  );
};
