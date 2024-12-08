import React from 'react';
import "./LoadingIcon.scss";

function LoadingIcon(props) {
    return (
        <div className="spinner-square">
            <div className="square-1 square"></div>
            <div className="square-2 square"></div>
            <div className="square-3 square"></div>
        </div>
    );
}

export default LoadingIcon;
