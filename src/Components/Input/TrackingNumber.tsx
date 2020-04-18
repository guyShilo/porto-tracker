import React, { useState, createRef, useEffect } from "react";
import { TrackingNumberComponent } from "./interface";

export const TrackingNumber: React.FC<TrackingNumberComponent> = ({
  currentState,
  setState,
  handleSubmit,
  buildColors,
  validatedObject,
}) => {
  // handles current tracking number state.
  const [inputState, setInputState] = useState({
    boxOne: "",
    boxTwo: "",
    boxThree: "",
  });
  // define refs for the inputs to handle changes of focus.
  const inputBoxOne = createRef<HTMLInputElement>();
  const inputBoxTwo = createRef<HTMLInputElement>();
  const inputBoxThree = createRef<HTMLInputElement>();
  // takes the input name and value and returns an object with the three inputs.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    buildColors(validatedObject, "trackingValid");
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    setInputState({ ...inputState, [name]: value });
    // when the length of the value is 4, move focus to the next input.
    if (inputBoxThree.current!.value.length === 4) {
      inputBoxTwo.current?.focus();
    }
    if (inputBoxTwo.current!.value.length === 4) {
      inputBoxOne.current?.focus();
    }
    if (inputBoxOne.current!.value.length === 4) {
      setState({
        buildTrackingNum: inputState,
      });
    }
  };
  // Only when the last input is updated fully the state is updated.
  useEffect(() => {
    setState({
      buildTrackingNum: inputState,
    });
  }, [inputState.boxOne.length === 4]);

  return (
    <div className="trackingNumber d-flex flex-column align-items-center p-1">
      <div className="w-100">
        <p className="text-center text-bold text-danger">הכנס מספר מעקב</p>
        <div
          className="text-center"
          style={
            validatedObject.isValid ? { display: "none" } : { display: "block" }
          }
        >
          <small className="text-danger text-center">
            {validatedObject.errors?.trackingError}
          </small>
        </div>
      </div>
      <div className="mainTrackingInputs row text-center col-sm-12">
        <form>
          <input
            onChange={(event) => handleChange(event)}
            value={inputState.boxOne}
            ref={inputBoxOne}
            className="col-sm-2 "
            name="boxOne"
            type="number"
            tabIndex={0}
            maxLength={4}
          />
          <span className="text-danger text-bold m-2">-</span>
          <input
            onChange={(event) => handleChange(event)}
            value={inputState.boxTwo}
            ref={inputBoxTwo}
            className="col-sm-2"
            name="boxTwo"
            type="number"
            tabIndex={1}
            maxLength={4}
          />
          <span className="text-danger text-bold m-2">-</span>
          <input
            onChange={(event) => handleChange(event)}
            value={inputState.boxThree}
            ref={inputBoxThree}
            className="col-sm-2"
            name="boxThree"
            type="number"
            tabIndex={2}
            maxLength={4}
          />
        </form>
      </div>
    </div>
  );
};
