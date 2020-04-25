import React, { useEffect } from "react";

import ReCAPTCHA from "react-google-recaptcha";

export const Captcha: React.FC<{
  captchaRef: ReCAPTCHA | null;
  state: string;
  setState: (value: ((prevState: string) => string) | string) => void;
  isValid: boolean;
}> = ({ captchaRef, state, setState, isValid }) => {

  const setRef = (element: ReCAPTCHA | null) => {
    captchaRef = element;
  }

  const handleCaptcha = (param: string | null) => {
    param ? setState(param) : setState('')
  };

  const handleCaptchaAfterSubmit = () => {
    if(isValid) {
      console.log('true')
    } else {
      captchaRef?.reset()
    }
  }

  useEffect(() => {
    handleCaptchaAfterSubmit()
  }, [isValid])

  return (
    <ReCAPTCHA
      ref={element => {
       setRef(element)
      }}
      size="compact"
      sitekey="6LdNMugUAAAAACy5-GpZUgjh4SWHbWcBwUtUpc7z"
      onChange={(param) => handleCaptcha(param || null)}
    />
  );
};
