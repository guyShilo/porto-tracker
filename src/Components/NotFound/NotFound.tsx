import React from "react";
import "./style/style.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const NotFound: React.FC<{}> = ({}) => {
    document.title = 'PortuTrack | 404 עמוד לא נמצא'
    return (
    <div className="notFoundContainer">
        <div className="text">
            <h1>404</h1>
            <h1>העמוד לא נמצא</h1>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/face-screaming-in-fear_1f631.png" />
            <Link to="/serivce">
                <Button label="לעמוד הראשי" onClick={() => null} />
            </Link>
        </div>
    </div>
)};
