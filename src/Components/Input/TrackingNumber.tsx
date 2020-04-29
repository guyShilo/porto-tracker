import React, { useContext, createRef, useEffect, useState } from "react";
import { TrackingNumberComponent } from "./InputsInterface";
import StateContext from "../../Context/StateContext";
import { motion } from "framer-motion";
import { animationHelpers } from "../../Utils";

export const TrackingNumber: React.FC<TrackingNumberComponent> = ({
validatedObject,
}) => {
  // initiating tracking number state
  const [trackingNumberState, setTrackingNumber] = useState({
    boxOne: "",
    boxTwo: "",
    boxThree: "",
  });
  // If given an Object, this function will return a string.
  const buildTrackingNumber = (trackingNumber: {
    boxOne: string;
    boxTwo: string;
    boxThree: string;
  }) => {
    const numbers = Object.values(trackingNumber);
    return `${numbers[0]}-${numbers[1]}-${numbers[2]}`;
  };
  // build the final number.
  const number = buildTrackingNumber(trackingNumberState);
  // Initiate the Context.
  const context = useContext(StateContext);
  // define refs for the inputs to handle changes of focus.
  const inputBoxOne = createRef<HTMLInputElement>();
  const inputBoxTwo = createRef<HTMLInputElement>();
  const inputBoxThree = createRef<HTMLInputElement>();
  // regex to split 12 Chars to 3 groups of 4.
  const splitToGroupsRegex = /.{4}/g;
  // regex to validate there is only numbers;
  const onlyNumbersRegex = new RegExp("^[0-9]+$");
  // Handling onPaste event when the client pastes the tracking number.
  const handlePaste = (event: React.ClipboardEvent<HTMLFormElement>) => {
    let clipped: any[] | RegExpMatchArray | null = [];
    let pastedTrackCode = {
      boxOne: clipped![0],
      boxTwo: clipped![1],
      boxThree: clipped![2],
    };
    const clipBoardData = event.clipboardData.getData("text");
    // checks where the tracking number has '-', if it has, split by that. if not. split by regex.
    if (clipBoardData.indexOf("-") !== -1){
      clipped = clipBoardData.split("-");
      console.log('regex test')
    } else if (clipBoardData.indexOf("-") === -1) {
      clipped = clipBoardData.match(splitToGroupsRegex);
    }
    context.addTrackCode(buildTrackingNumber(pastedTrackCode));
    setTrackingNumber({
      boxOne: clipped![0],
      boxTwo: clipped![1],
      boxThree: clipped![2],
    });
    inputBoxThree.current?.focus();
  };

  // Checks whether the focus needs to be moved forward.
  const checkBoxes = () => {
    if (inputBoxOne.current?.value.length == 4) inputBoxTwo.current?.focus();
    if (inputBoxTwo.current?.value.length == 4) inputBoxThree.current?.focus();
  };
  // takes the input name and value and returns an object with the three inputs.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // buildColors(validatedObject, "trackingValid");
    const value = event.target.value;
    const name = event.target.name;
    if (event.target.value.length === 4) {
      checkBoxes();
    }
    if (onlyNumbersRegex.test(value) || value === "") {
      setTrackingNumber({
        ...trackingNumberState,
        [name]: value,
      });
    } else {
      return;
    }
  };
  // Updates every time the state updates.
  useEffect(() => {
    context.addTrackCode(number);
  }, [context, number]);
  return (
    <div className="trackingNumber d-flex flex-column align-items-center p-1">
      <p className="text-center text-bold ">הכנס מספר מעקב</p>
      <motion.div
        className="text-center"
        style={
          trackingNumberState.boxThree.length !== 0
            ? { display: "block" }
            : { display: "none" }
        }
        variants={animationHelpers.createVariants("opacity", 0, 1)}
        initial="variantA"
        animate="variantB"
      >
        <small className="text-danger text-center">
          {validatedObject.errors?.trackingError}
        </small>
      </motion.div>
      <div className="mainTrackingInputs text-center col-sm-12">
        <form dir="ltr" onPaste={(event) => handlePaste(event)}>
          <input
            onChange={(event) => {
              handleChange(event);
            }}
            value={trackingNumberState.boxOne}
            ref={inputBoxOne}
            className="col-sm-2 "
            name="boxOne"
            type="text"
            pattern="/^(?:[1-9]\d*|\d)$/"
            tabIndex={0}
            maxLength={4}
          />
          <span className=" text-bold m-2">-</span>
          <input
            onChange={(event) => {
              handleChange(event);
            }}
            value={trackingNumberState.boxTwo}
            ref={inputBoxTwo}
            className="col-sm-2"
            name="boxTwo"
            type="text"
            pattern="/^(?:[1-9]\d*|\d)$/"
            tabIndex={1}
            maxLength={4}
          />
          <span className=" text-bold m-2">-</span>
          <input
            onChange={(event) => {
              handleChange(event);
            }}
            value={trackingNumberState.boxThree}
            ref={inputBoxThree}
            className="col-sm-2"
            name="boxThree"
            type="text"
            pattern="/^(?:[1-9]\d*|\d)$/"
            tabIndex={2}
            maxLength={4}
          />
        </form>
      </div>
    </div>
  );
};
