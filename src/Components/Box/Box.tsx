import React, { useState, useEffect, createRef } from "react";
import axios from "axios";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useEmailValidator } from "../InputValidators/EmailValidator";
import computerImage from "../../assets/computer.svg";
import "./styles/style.scss";
import { TrackingNumber } from "../Input/TrackingNumber";
import { Captcha } from "../Captcha/Captcha";
import { ValidIndicator } from "../Button/ValidIndicator";
import { useTrackingValidator } from "../InputValidators/TrackingValidator";
import { BoxProps, TrackingNumberProps, UserInputProps } from "./interface";
import { Alert } from "../Alert/Alert";
import { SwalFunctions } from "../../Utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router";

export const Box: React.FC<BoxProps> = ({ sharedObject }) => {
  document.title = "ראשי";
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  // current captcha state
  const [CaptchaState, setCaptchaState] = useState("");
  // initiating email state as empty string.
  const [emailState, setEmailState] = useState("");
  // handling modal appearance.
  const [showMessageSent, setShowMessageSent] = useState(true);
  // initiating tracking number state
  const [trackingNumberState, setTrackingNumber] = useState<
    TrackingNumberProps
  >({
    buildTrackingNum: {
      boxOne: "",
      boxTwo: "",
      boxThree: "",
    },
    trackingNumber: "",
  });
  // initiating object that later will be sent to the data base.
  const [userInput, setUserInput] = useState<UserInputProps>({
    Email: "",
    TrackCode: "",
    Captcha: CaptchaState,
  });
  // returning errors object and isValid boolean, to handle UI errors. - Email
  const validatedEmail = useEmailValidator(emailState);
  // returning errors object and isValid boolean, to handle UI errors. - Tracking Number
  const validatedTrackingNumber = useTrackingValidator(trackingNumberState);
  // The state of the Validation Indicator.
  const [colorState, setColorState] = useState({
    emailValid: !validatedEmail.isValid ? "text-danger" : "text-success",
    trackingValid: !validatedTrackingNumber.isValid
      ? "text-danger"
      : "text-success",
  });

  const captchaRef = createRef<any>();
  // function that gets an object from the validation, hook and decides the state of the indicator.
  const buildColors = (
    validatedObject: {
      errors: {
        emailError?: string;
        trackingError?: string;
      };
      isValid?: boolean;
    },
    indicator: string
  ) => {
    if (validatedObject.isValid === false) {
      setColorState({ ...colorState, [indicator]: "text-danger" });
    }
    if (validatedObject.isValid === true) {
      setColorState({ ...colorState, [indicator]: "text-success" });
    }
  };
  const updateDB = async () => {
    const { Email, TrackCode } = userInput;
    try {
      const request = axios.post("http://173.255.115.65/sendData", {
        Email,
        TrackCode,
        "g-recaptcha-response": CaptchaState,
      });
      const response = await request;
      if (response.data.isValid) {
        SwalFunctions.swalSuccsess(MySwal, history);
      } else {
        SwalFunctions.swalFailed(response.data, MySwal, history);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(
    () =>
      setUserInput({
        Email: validatedEmail.emailState,
        TrackCode: validatedTrackingNumber.finalNumber,
      }),
    [
      validatedTrackingNumber.isValid &&
        validatedEmail.isValid &&
        CaptchaState.length < 2,
    ]
  );
  return (
    <div className="boxContainer">
      <div className="boxHeader"></div>
      <div className="p-2 mainBox">
        <div className="d-flex flex-column align-items-center">
          <div className="p2 m-2 d-flex justify-content-center w-100">
            <ValidIndicator
              isValid={validatedEmail?.isValid}
              handleSubmit={undefined}
            />
            <Input
              currentState={emailState}
              setState={setEmailState}
              length={99}
              label={"הכנס כתובת דוא״ל"}
              name={"email"}
              inputType={"email"}
              buildColors={buildColors}
              validatedObject={validatedEmail}
              errors={validatedEmail?.errors || undefined}
            />
          </div>
          <div className="p2 m-2 d-flex justify-content-center w-75">
            <div className="m-auto">
              <ValidIndicator
                isValid={validatedTrackingNumber?.isValid}
                handleSubmit={undefined}
              />
            </div>
            <TrackingNumber
              buildColors={buildColors}
              handleSubmit={null}
              validatedObject={validatedTrackingNumber}
              currentState={trackingNumberState.buildTrackingNum}
              setState={setTrackingNumber}
            />
          </div>
          <div
            className="captchaSection row d-flex
        justify-content-center p-2 mr-4 mb-5"
          >
            <Captcha
              ref={captchaRef}
              state={CaptchaState}
              setState={setCaptchaState}
            />
          </div>
          <div className="d-flex justify-content-center mt-4 mr-5 p-3">
            <Button
              label="להמשך הרשמה"
              showFunction={setShowMessageSent}
              isDisabled={CaptchaState.length < 2}
              onClick={() => {
                updateDB();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
