import React from "react";

import ReCAPTCHA from "react-google-recaptcha";

export const Captcha: React.FC<{}> = ({}) => {
  return (
    <ReCAPTCHA
      ref={null}
      sitekey="Your client site key"
      onChange={() => console.log("captcha")}
    />
  );
};
