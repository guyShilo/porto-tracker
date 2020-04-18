import React, {useState} from "react";
import "./style/style.scss";
import { useEmailValidator } from "../InputValidators/EmailValidator";
import { ValidIndicator } from "../Button/ValidIndicator";
import { InputProps } from "./interface";

export const Input: React.FC<InputProps> = ({
  label,
  name,
  length,
  currentState,
  setState,
  inputType,
  errors,
  buildColors,
  validatedObject,
}) => {
  const [showError, setShowError] = useState(false);

  // handles the email input.
  const handleChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    buildColors(validatedObject, "emailValid");
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
        <p className="text-bold text-center text-danger">{label}</p>
        <div
          className="text-center"
          style={
            validatedObject.isValid
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <small className="text-danger text-center">{errors?.emailError}</small>
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
