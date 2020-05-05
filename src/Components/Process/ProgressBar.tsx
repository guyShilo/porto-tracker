import React, { useState } from "react";
import "./style/style.scss";
import { Overlay } from "../Overlay/Overlay";
import { ViewStep } from "./ViewStep";
import { Steps } from "./steps";
import { motion } from "framer-motion";
import { animationHelpers } from "src/Utils";

export const ProgressBar: React.FC = () => {
  const [showStep, setShowStep] = useState(false);

  const [currentStep, setCurrentStep] = useState({});

  const decideStep = (id: number) => {
    const filteredStep = Steps.filter((step) => step.id === id);
    filteredStep.map((step) => setCurrentStep(step));
    setShowStep(!showStep);
  };
  return (
    <div className="progressBarContainer">
      <p className="text-light text-center">
        לחצו על שלב הבקשה הנוכחי שקיבלתם מ PortuTrack באימייל
      </p>
      <section className="stepIndicator">
        {Steps.map((eachStep, index) => (
          <div key={index++}> 
            <motion.div
              variants={animationHelpers.createVariants("scale", 0.95, 1.05)}
              initial="variantA"
              whileHover="variantB"
              onClick={() => {
                decideStep(eachStep.id);
              }}
              className="eachStep"
            >
              <div className="stepIcon bg-primary">{eachStep.id}</div>
              <p>{eachStep.step_progress_bar_name}</p>
            </motion.div>
            {eachStep.id !== 7 ? (
              <div className="indicator-line active"></div>
            ) : null}
          </div>
        ))}
        )}
      </section>
      {showStep ? (
        <Overlay
          Component={<ViewStep currentStep={currentStep} />}
          currentState={showStep}
          hide={() => setShowStep(!showStep)}
        />
      ) : null}
    </div>
  );
};
