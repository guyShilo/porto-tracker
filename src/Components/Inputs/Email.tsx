import React, { useContext, useState, useEffect } from "react";
import "./style/style.scss";
import { InputProps } from "./InputsInterface";
import StateContext from "../../Context/StateContext";
import { Error } from "./Error";

export const Email: React.FC<InputProps> = ({
  errors,
  buildColors,
}) => {
  const [currentEmail, setCurrentEmail] = useState('')
  // Importing the context.
  const context = useContext(StateContext);
  // handles the email input.
  const handleChange = (input: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // buildColors(validatedObject, "emailValid");
    const value = e.target.value;
    setCurrentEmail(value)
  };
  useEffect(() => {
     context.addEmail(currentEmail);
     console.log('emailing')
  }, [currentEmail]);
  return (
    <div className="p-2 m-1">
      <div className="mainInput">
        <p className="text-bold text-center">הכנס כתובת דוא״ל</p>
        <Error validatedObject={{...context.validatedEmail, trackingNumber: ''}}/>
        <input
          value={currentEmail}
          onChange={handleChange("email")}
          className="text-center"
          type="email"
          required={true}
        />
      </div>
    </div>
  );
};
