import React from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import notFoundImage from '../../assets/serverDown.svg'

export const NotFound: React.FC = () => {
    document.title = 'PortuTrack | 404 עמוד לא נמצא'
    return (
    <div className="notFoundContainer">
        <div className="text">
            <h1>404</h1>
            <h1>העמוד לא נמצא</h1>
            <img className="w-25 mb-2" alt="notFound" src={notFoundImage} />
            <Link to="/">
                <Button label="לעמוד הראשי" onClick={() => null} />
            </Link>
        </div>
    </div>
)};
