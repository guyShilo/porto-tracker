import React, {useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {CaptchaProps} from './CaptchaProps'

export const Captcha: React.FC<CaptchaProps> = ({captchaRef, setCaptcha, isValid}) => {
    // Setting the ref equal to the recaptcha ref to get the recaptcha methods.
    const setRef = (element: ReCAPTCHA | null) => captchaRef = element;
    // If the recaptchaKey IS NOT falsy, save it to the state.
    const handleCaptcha = (currentKey: string | null) => currentKey ? setCaptcha(currentKey) : setCaptcha('');
    // Calling the function when isValid changes.
    useEffect(() => {
        // If the response from the server IS NOT VALID - reset the recaptcha.
        const handleCaptchaAfterSubmit = () => {
            if (isValid) {
            } else {
                captchaRef?.reset()
            }
        };
        handleCaptchaAfterSubmit();
    }, [captchaRef, isValid]);
    return (
        <ReCAPTCHA
            ref={element => {
                setRef(element)
            }}
            size="compact"
            sitekey="6LdNMugUAAAAACy5-GpZUgjh4SWHbWcBwUtUpc7z"
            onChange={(recaptchaKey) => handleCaptcha(recaptchaKey || null)}
        />
    );
};
