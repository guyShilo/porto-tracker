import React from "react";

export const TrackingNumber: React.FC<{
  currentState: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  // handleSubmit: (e: any, input: { boxOne: string; boxThree: string; boxTwo: string }) => void;
  handleSubmit: null;
  buildColors: (validatedObject: {
    errors: {
      emailError?: string | undefined;
      trackingError?: string | undefined;
    };
    isValid?: boolean | undefined;
  }) => void;
  validatedObject: { errors: { trackingError: string }; isValid?: boolean } | null;
}> = ({ currentState, setState, handleSubmit }) => {
  // handles current tracking number state.
  const [inputState, setInputState] = React.useState({
    boxOne: '',
    boxTwo: '',
    boxThree: '',
  });
  // define refs for the inputs to handle changes of focus.
  const inputBoxOne = React.createRef<HTMLInputElement>();
  const inputBoxTwo = React.createRef<HTMLInputElement>();
  const inputBoxThree = React.createRef<HTMLInputElement>();
  // takes the input name and value and returns an object with the three inputs.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="trackingNumber d-flex flex-column align-items-center p-1">
      <p className="text-center text-bold text-danger">הכנס מספר מעקב</p>
      <div className="mainTrackingInputs row text-center">
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
                 <span className="text-light m-2">-</span>
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
                 <span className="text-light m-2">-</span>
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
