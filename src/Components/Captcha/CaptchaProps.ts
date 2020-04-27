import ReCAPTCHA from "react-google-recaptcha";

export interface CaptchaProps {
    captchaRef: ReCAPTCHA | null;
    setCaptcha: (value: ((prevState: string) => string) | string) => void;
    isValid: boolean;
}