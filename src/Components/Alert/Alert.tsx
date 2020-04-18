import React from 'react'
import './styles/style.scss'
interface AlertProps {
    error?: string,
    isValid: boolean,
    isExist?: boolean
}

export const Alert: React.FC<AlertProps> = ({error , isValid, isExist}) => {
        const decideColor = () => {
                const positive = 'sucsess'
                const negative = 'failed'
                const currentClass: string = isValid ? positive : negative
                return currentClass
            }
        return <div className="alertContainer">
            <div className="alertTitle">
                <h1 className={decideColor()}>כותרת ההודעה</h1>
            </div>
            <hr className={decideColor()}/>
            <div className="alertContent">
            </div>
        </div>;
}