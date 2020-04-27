import React, {useEffect, useState, useCallback} from "react";
import "./style/style.scss";
import {ButtonProps} from "./ButtonProps";

export const Button: React.FC<ButtonProps> = ({ showFunction, onClick, isDisabled, label }) => {
  const [disabled, setDisabled] = useState(false);
  // If the string length IS NOT VALID - disable the submit button. - used with recaptcha
  const whichButton = () => disabled ? 'disabledButton m-2' : 'mainButton m-2';
  const handleDisabled = useCallback(
      () => {
        if (isDisabled) setDisabled(true);
        else setDisabled(false);
      },
      [isDisabled],
  );
  useEffect(() => {
    handleDisabled();
    return () => {
      handleDisabled()
    }
  }, [handleDisabled, isDisabled]);
  return (
    <>
      <div className={whichButton()}>
        <button
          disabled={disabled}
          onClick={() => {
            // showFunction(true);
            onClick();
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
};
