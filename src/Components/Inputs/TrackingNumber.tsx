import React, { useContext, createRef, useEffect, useState } from "react";
import { TrackingNumberComponent } from "./InputsInterface";
import StateContext from "../../Context/StateContext";
import { Error } from "./Error";
import { animationHelpers } from "../../Utils";

export const TrackingNumber: React.FC<TrackingNumberComponent> = ({}) => {
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
  // regex to numbers and Hyphen;
  const regexWith = new RegExp("^[0-9]+$");
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
    if (clipBoardData.indexOf("-") !== -1) {
      clipped = clipBoardData.split("-");
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
  // Initiating an Inputs Array for cleaner code.
  const InputsArray = [
    {
      name: "boxOne",
      ref: inputBoxOne,
      value: trackingNumberState.boxOne,
    },
    {
      name: "boxTwo",
      ref: inputBoxTwo,
      value: trackingNumberState.boxTwo,
    },
    {
      name: "boxThree",
      ref: inputBoxThree,
      value: trackingNumberState.boxThree,
    },
  ];
  // Extracting the fade in animation from the utils file.
  const { FadeInAnimation } = animationHelpers;

  return (
    <div className="trackingNumber d-flex flex-column align-items-center p-1">
      <p className="text-center text-bold ">הכנס מספר מעקב</p>
      <div className="w-50">
        <Error validatedObject={{...context.validatedTrackingNumber, emailState: ''}} />
      </div>
      <div className="mainTrackingInputs text-center col-sm-12">
        <form dir="ltr" onPaste={(event) => handlePaste(event)}>
          {InputsArray.map((eachInput, index) => (
            <>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                pattern="/^(?:[1-9]\d*|\d)$/"
                className="col-sm-2"
                type="text"
                value={eachInput.value}
                ref={eachInput.ref}
                name={eachInput.name}
                tabIndex={index}
                maxLength={4}
                key={index + 1}
              />
              {index !== 2 ? <span className=" text-bold m-2">-</span> : null}
            </>
          ))}
        </form>
      </div>
    </div>
  );
};
