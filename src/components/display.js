import React from "react";

const Display = (props) => {
    return (
        <div className="screen">
            <p id="screen-relay"></p>
            <p id="output">{props.displayData}</p>
        </div>
    )
}

export default Display;