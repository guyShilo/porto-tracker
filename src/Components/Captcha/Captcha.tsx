import React, {ChangeEvent} from "react";

import ReCAPTCHA from "react-google-recaptcha";

export const Captcha: React.FC<{
  ref:  any;
  state: string;
  setState: (value: (((prevState: string) => string) | string)) => void
}> = ({ref,state,setState}) => {

  const handleCaptcha = (param: string | null) => {
    if(param) setState(param)
    else setState('')
  };

  return (
    <ReCAPTCHA
      ref={ref}
      size="compact"
      sitekey="6LdNMugUAAAAACy5-GpZUgjh4SWHbWcBwUtUpc7z"
      onChange={(param) => handleCaptcha(param || null)}
    />
  );
};
