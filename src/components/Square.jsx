import React from "react";

export default function Square(props) {
    return (
        <div className="area" onClick={props.click}>
            <h2>{props.square}</h2>
        </div>
    );
}
