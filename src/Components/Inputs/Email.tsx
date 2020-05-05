import React, { useContext, useState, useEffect } from "react";
import { InputProps } from "./InputsInterface";
import { Error } from "./Error";
import StateContext from "../../Context/StateContext";

import "./style/style.scss";
export const Email: React.FC<InputProps> = ({ errors, buildColors }) => {
  // Initiating a state for the current email.
  const [currentEmail, setCurrentEmail] = useState("");
  // Importing the context.
  const context = useContext(StateContext);
  // handles the email input.
  const handleEmailChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // buildColors(validatedObject, "emailValid");
    const value = e.target.value;
    setCurrentEmail(value);
  };
  // Updates every time the state updates.
  useEffect(() => {
    context.addEmail(currentEmail);
  }, [currentEmail]);
  return (
    <div className="p-2 m-1">
      <div className="mainInput">
        <p className="text-bold text-center">הכנס כתובת דוא״ל</p>
        <input
          value={currentEmail}
          onChange={handleEmailChange("email")}
          className="text-center"
          type="email"
        />
        <Error
          validatedObject={{ ...context.validatedEmail, trackingNumber: "" }}
        />
      </div>
    </div>
  );
};
