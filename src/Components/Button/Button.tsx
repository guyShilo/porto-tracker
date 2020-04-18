import React, {useEffect, useState} from "react";
import "./style/style.scss";
export const Button: React.FC<{
  showFunction?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => any;
  isDisabled?: boolean;
  label: string;
}> = ({ showFunction, onClick, isDisabled, label }) => {
  const [disabled, setDisabled] = useState(false);
  const whichButton = () => disabled ? 'disabledButton m-2' : 'mainButton m-2'
  const handleDisabled = () => {
    if (isDisabled) setDisabled(true);
    else setDisabled(false);
  };

  useEffect(() => {
    handleDisabled();
  }, [isDisabled]);

  return (
    <>
      <div className={whichButton()}>
        <button
          disabled={disabled}
          onClick={() => {
            // showFunction(true);
            console.log("click1");
            onClick();
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
};
