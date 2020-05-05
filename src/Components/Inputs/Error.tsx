import React, { useContext } from 'react'
import StateContext from 'src/Context/StateContext';

interface ErrorProps {
    validatedObject: {
        emailState: string ;
        errors: {}
        isValid: boolean
        trackingNumber: string
    }
}

export const Error: React.FC<ErrorProps> = ({validatedObject}) => {
        return <div
            className="errorBox"
            style={
              validatedObject.isValid !== true
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <small>{Object.values(validatedObject.errors)}</small>
          </div>;
}