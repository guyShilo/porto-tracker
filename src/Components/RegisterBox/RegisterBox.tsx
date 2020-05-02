import React, { useState, useContext } from "react";
import axios from "axios";
import { Email } from "../Input/Email";
import { Button } from "../Button/Button";
import "./styles/style.scss";
import { TrackingNumber } from "../Input/TrackingNumber";
import { Captcha } from "../Captcha/Captcha";
import { ValidIndicator } from "../Button/ValidIndicator";
import { SwalFunctions } from "../../Utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router";
import StateContext from "src/Context/StateContext";
import { ReCAPTCHA } from "react-google-recaptcha";
import destinations from "../../assets/destinations.svg";

export const RegisterBox: React.FC = () => {
  document.title = "PortuTrack | הרשמה";

  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const context = useContext(StateContext);

  // current captcha state
  const [CaptchaState, setCaptchaState] = useState("");
  // creating captcha ref
  let captchaRef: ReCAPTCHA | null = null;
  // handling modal appearance.
  const [captchaValid, setCaptchaValid] = useState<boolean>(false);

  // The state of the Validation Indicator.
  // const [colorState, setColorState] = useState({
  //   emailValid: !context.emailIsValid ? "text-danger" : "text-success",
  //   trackingValid: !context.trackCodeIsValid ? "text-danger" : "text-success",
  // });

  // function that gets an object from the validation, hook and decides the state of the indicator.
  // const buildColors = (
  //   validatedObject: {
  //     errors: {
  //       emailError?: string;
  //       trackingError?: string;
  //     };
  //     isValid?: boolean;
  //   },
  //   indicator: string
  // ) => {
  //   if (validatedObject.isValid === false) {
  //     setColorState({ ...colorState, [indicator]: "text-danger" });
  //   }
  //   if (validatedObject.isValid === true) {
  //     setColorState({ ...colorState, [indicator]: "text-success" });
  //   }
  // };

  const updateDB = async () => {
    const { finalTrackCode, finalEmail } = context;
    try {
      setCaptchaValid(true);
      const request = axios.post("http://173.255.115.65/sendData", {
        Email: finalEmail,
        TrackCode: finalTrackCode,
        "g-recaptcha-response": CaptchaState,
      });
      const response = await request;
      if (response.data.isValid) {
        await SwalFunctions.swalSuccess(MySwal, history);
      } else {
        await SwalFunctions.swalFailed(response.data, MySwal, history);
        setCaptchaValid(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="boxContainer">
      <div className="boxHeader">
        <h1>הרשמה לשירות</h1>
      </div>
      <div className="mainBox">
        <div className="InputsContainer">
          <div className="EmailInputDiv">
            <div className="mailIndicator">
              <ValidIndicator isValid={context.emailIsValid.isValid} />
            </div>
            <Email
              // buildColors={buildColors}
              validatedObject={context.emailIsValid}
              errors={context.emailIsValid.errors}
            />
          </div>
          <div className="trackingNumberDiv">
            <div className="trackingIndicator">
              <ValidIndicator isValid={context.trackCodeIsValid.isValid} />
            </div>
            <TrackingNumber
              // buildColors={buildColors}
              handleSubmit={null}
              validatedObject={context.trackCodeIsValid}
              currentState={context.finalTrackCode}
            />
          </div>
          <div className="captchaSection">
            <Captcha
              captchaRef={captchaRef}
              isValid={captchaValid}
              setCaptcha={setCaptchaState}
            />
          </div>
          <div className="submitDiv ">
            <Button
              label="להמשך הרשמה"
              showFunction={() => null}
              isDisabled={CaptchaState.length < 2}
              onClick={() => {
                updateDB();
              }}
            />
          </div>
        </div>
      </div>
      <img alt="registerPic" className="registerPic" src={destinations} />
    </div>
  );
};
