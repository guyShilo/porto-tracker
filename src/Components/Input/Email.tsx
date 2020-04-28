import React, {  useContext } from "react";
import "./style/style.scss";
import { InputProps } from "./InputsInterface";
import StateContext from "../../Context/StateContext";

export const Email: React.FC<InputProps> = ({
  errors,
  buildColors,
  validatedObject,
}) => {
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
          className="text-bold text-center"
        >
          הכנס כתובת דוא״ל
        </p>
        {/* <div
          className="text-center"
          style={validatedObject.emailState.length !== 0  ? { display: "block" } : { display: "none" }}
        >
          <small className="text-danger text-center">
            {errors?.emailError}
          </small>
        </div> */}
        <input
          onChange={handleChange("email")}
          className="text-center"
          type='email'
          required={true}
        />
      </div>
    </div>
  );
};
