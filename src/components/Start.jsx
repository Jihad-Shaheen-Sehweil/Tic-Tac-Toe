import React from "react";
import Board from "./Board";

export default function Start() {
    const [isStarted, setIsStarted] = React.useState(false);

    function startGame() {
        setIsStarted(true);
    }
    return (
        <div>
            {isStarted ? (
                <Board />
            ) : (
                <button className="start-game" onClick={startGame}>
                    <h1>Start Game</h1>
                </button>
            )}
        </div>
    );
}
