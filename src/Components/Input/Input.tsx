import React, { useState, useContext, useEffect } from "react";
import "./style/style.scss";
import { InputProps } from "./interface";
import { globalReducer, IState, IAction } from "../Reducer";
import { useEmailValidator } from "../InputValidators/EmailValidator";
import StateContext from "../../Context/StateContext";

export const Input: React.FC<InputProps> = ({
  label,
  name,
  length,
  currentState,
  inputType,
  errors,
  buildColors,
  validatedObject,
}) => {
  const [showError, setShowError] = useState(false);

  const handleError = () => {
    if (validatedObject.isValid === false) {
      setShowError(true);
    } else if (context.finalEmail && validatedObject.isValid) {
      setShowError(false);
    }
  };
  // Importing the context.
  const context = useContext(StateContext);
  // handles the email input.
  const handleChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // buildColors(validatedObject, "emailValid");
    const value = e.target.value;
    context.addEmail(value);
  };
  return (
    <div className="p-2 m-1">
      <div className="mainInput d-flex flex-column">
        <p
          onClick={() => console.log(context)}
          className="text-bold text-center text-dark"
        >
          {label}
        </p>
        <div
          className="text-center"
          style={validatedObject.emailState.length !== 0  ? { display: "block" } : { display: "none" }}
        >
          <small className="text-danger text-center">
            {errors?.emailError}
          </small>
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
