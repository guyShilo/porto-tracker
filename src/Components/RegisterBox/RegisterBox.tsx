import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Email } from "../Inputs/Email";
import { Button } from "../Button/Button";
import { TrackingNumber } from "../Inputs/TrackingNumber";
import { Captcha } from "../Captcha/Captcha";
import { ValidIndicator } from "../Button/ValidIndicator";
import { SwalFunctions, animationHelpers } from "../../Utils";
import { ReCAPTCHA } from "react-google-recaptcha";
import { Loader } from "../Loader";
import { Overlay } from "../Overlay/Overlay";
import { Regulations } from "../Regulations/Regulations";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StateContext from "src/Context/StateContext";

import destinations from "../../assets/destinations.svg";
import "./styles/style.scss";

export const RegisterBox: React.FC = () => {
  document.title = "PortuTrack | הרשמה";
  const { FadeInAnimation } = animationHelpers;
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const context = useContext(StateContext);

  // Current captcha state
  const [CaptchaState, setCaptchaState] = useState("");
  // Creating captcha ref
  let captchaRef: ReCAPTCHA | null = null;
  // Handling modal appearance.
  const [captchaValid, setCaptchaValid] = useState<boolean>(false);
  // Handling the loader state
  const [loading, setLoading] = useState(false);
  // Handling Checked regulatgions
  const [showRegulations, setShowRegulations] = useState(false);

  const updateDB = async () => {
    const { finalTrackCode, finalEmail } = context;
    setLoading(true);
    try {
      setCaptchaValid(true);
      const request = axios.post("http://173.255.115.65/sendData", {
        Email: finalEmail,
        TrackCode: finalTrackCode,
        "g-recaptcha-response": CaptchaState,
      });
      const response = await request;
      if (response.data.isValid) {
        setLoading(false);
        await SwalFunctions.swalSuccess(MySwal, history);
      } else {
        setLoading(false);
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
      {loading ? (
        <Overlay
          Component={<Loader />}
          currentState={loading}
          hide={() => setLoading(false)}
          hideExitButton={true}
        />
      ) : (
        <div className="mainBox">
          <div className="InputsContainer">
            <div className="EmailInputDiv">
              <div className="mailIndicator">
                <ValidIndicator isValid={context.validatedEmail.isValid} currentInputState={context.validatedEmail.emailState} />
              </div>
              <Email
                validatedObject={context.validatedEmail}
                errors={context.validatedEmail.errors}
              />
            </div>
            <div className="trackingNumberDiv">
              <div className="trackingIndicator">
                <ValidIndicator
                  isValid={context.validatedTrackingNumber.isValid}
                  currentInputState={context.validatedTrackingNumber.trackingNumber}
                />
              </div>
              <TrackingNumber
                handleSubmit={null}
                validatedObject={context.validatedTrackingNumber}
              />
            </div>
            <motion.div
              initial={FadeInAnimation.initialDefs}
              animate={FadeInAnimation.animationDefs}
              transition={FadeInAnimation.transitionDefs}
              className="captchaSection"
            >
              <Captcha
                captchaRef={captchaRef}
                isValid={captchaValid}
                setCaptcha={setCaptchaState}
              />
            </motion.div>
            <div className="regulationsDiv">
              <label
                onClick={() => setShowRegulations(!showRegulations)}
                className="text-light"
              >
                הרשמתך מהווה הסכמה<b className="p-1">לתנאי השימוש</b>
              </label>
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
      )}
      <img alt="registerPic" className="registerPic" src={destinations} />
    </div>
  );
};
