import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export const ValidIndicator: React.FC<{
  isValid: boolean | null;
}> = ({ isValid }) => {
  const returnClass = () => {
    if(isValid === true) return 'text-success mt-4'
    return 'text-dark mt-4'
  }
  return (
    <AiFillCheckCircle
      className={returnClass()}
      size={38}
    />
  );
};
