import React from "react";
import "./style/style.scss";
export const Button: React.FC<{
  showFunction: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => any;
  isDisabled?: boolean
}> = ({ showFunction, onClick, isDisabled }) => {
    const [disabled, setDisabled] = React.useState(false);

    const  handleDisabled = () => {
        if(isDisabled) setDisabled(true) ;
        else setDisabled(false)
    };

    React.useEffect(() => {
        handleDisabled()
    }, [isDisabled]);

    return (
    // <div className="mainButton m-2">
      <button  disabled={disabled} onClick={() => {
              // showFunction(true);
              console.log('click1');
              onClick()
      }}>לחץ כדי להירשם</button>
    // </div>
  );
};
