import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export const ValidIndicator: React.FC<{
  isValid: boolean | undefined;
}> = ({ isValid }) => {
  return (
    <AiFillCheckCircle
      className={isValid ? "text-success mt-4" : "text-danger mt-4"}
      size={38}
    />
  );
};
