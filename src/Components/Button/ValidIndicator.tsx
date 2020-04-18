import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface IndicatorProps {
  isValid: boolean | undefined;
  handleSubmit: any;
}
export const ValidIndicator: React.FC<IndicatorProps> = ({

  isValid
}) => {

  return (
    <button
      className="btn p-2 float-right mt-4"
      type="submit"
    >
      <AiFillCheckCircle className={isValid ? 'text-success' : 'text-danger'} size={38} />
    </button>
  );
};
