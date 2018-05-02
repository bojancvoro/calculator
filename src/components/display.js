import React from "react";

const Display = (props) => {
    return (
        <div className="screen">
            <p>{props.displayData}</p>
        </div>
    )
}

export default Display;