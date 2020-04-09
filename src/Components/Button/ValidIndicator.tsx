import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface IndicatorProps {
  isValid: boolean | undefined;
  handleSubmit: any;
  colorState: string;
}

export const ValidIndicator: React.FC<IndicatorProps> = ({
  handleSubmit,
  colorState,
}) => {
  console.log(colorState);
  return (
    <button
      className="btn p-2 float-right mt-4"
      type="submit"
      onClick={(event) => handleSubmit(event)}
    >
      <AiFillCheckCircle className={colorState} size={38} />
    </button>
  );
};
