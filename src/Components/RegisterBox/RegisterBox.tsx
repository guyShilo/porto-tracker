import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Email } from "../Inputs/Email";
import { Button } from "../Button/Button";
import { TrackingNumber } from "../Inputs/TrackingNumber";
import { Captcha } from "../Captcha/Captcha";
import { SwalFunctions, animationHelpers } from "../../Utils";
import { ReCAPTCHA } from "react-google-recaptcha";
import { Loader } from "../Loader";
import { Overlay } from "../Overlay/Overlay";
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

  const updateDB = async () => {
    const { finalTrackCode, finalEmail } = context;
    setLoading(true);
    try {
      setCaptchaValid(true);
      const request = axios.post(
        "https://www.service.portutrack.com/sendData",
        {
          Email: finalEmail,
          TrackCode: finalTrackCode,
          "g-recaptcha-response": CaptchaState,
        },
        { timeout: 100 }
      );
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
      if (String(error).indexOf("timeout") !== -1) {
        await SwalFunctions.swalFailed(
          {
            isValid: false,
            msgToUser: `אין תגובה מהשרת.
             ברוב המקרים, נסיון נוסף יפתור את העניין.
             אם הבעיה חוזרת, צור איתנו קשר: nadav.tarago@gmail.com`,
          },
          MySwal,
          history
        );
      } else {
        alert(error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="boxContainer">
      <div className="boxHeader">
        <h1>הצטרפו לשירות</h1>
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
              <Email
                validatedObject={context.validatedEmail}
                errors={context.validatedEmail.errors}
              />
            </div>
            <div className="trackingNumberDiv">
              <TrackingNumber
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
              <a
                href="https://www.service.portutrack.com/useterms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <label className="text-light">
                  הרשמתך מהווה הסכמה<b className="p-1">לתנאי השימוש</b>
                </label>
              </a>
            </div>
            <div className="submitDiv ">
              <Button
                label="להמשך הרשמה"
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
