import React from "react";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <div
      style={{ marginTop: "10%" }}
      className="d-flex justify-content-center flex-column align-items-center"
    >
      <div
        style={{ width: "8rem", height: "8rem" }}
        className=" spinner-border text-success"
        role="status"
      >
        <span
          style={{ fontSize: "5rem", padding: "2rem", position: "initial" }}
          className="text-danger sr-only"
        >
          ...
        </span>
      </div>
      <p className="mt-5 text-success" style={{ fontWeight: "bold" }}>
        סבלנות, סבלנות, לא קונים בשום חנות...
      </p>
    </div>
  );
};
