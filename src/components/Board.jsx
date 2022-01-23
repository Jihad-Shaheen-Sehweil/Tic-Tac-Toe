import React from "react";
import Square from "./Square";

export default function Board() {
    const [gameBoard, setGameBoard] = React.useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [player, setPlayer] = React.useState("X");
    const [ended, setEnded] = React.useState(false);
    const [gameResult, setGameResult] = React.useState("");
    const [count, setCount] = React.useState(0);

    function squareClick(number) {
        gameBoard.forEach((current, index) => {
            if (number === index && current === "") {
                gameBoard[number] = player;
                setCount(count + 1);
            }
        });
        setGameBoard(gameBoard);
        checkWin(gameBoard);

        if (player === "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    }
    function checkWin(gameSquares) {
        if (
            (gameSquares[0] === "X" &&
                gameSquares[1] === "X" &&
                gameSquares[2] === "X") ||
            (gameSquares[3] === "X" &&
                gameSquares[4] === "X" &&
                gameSquares[5] === "X") ||
            (gameSquares[6] === "X" &&
                gameSquares[7] === "X" &&
                gameSquares[8] === "X") ||
            (gameSquares[0] === "X" &&
                gameSquares[3] === "X" &&
                gameSquares[6] === "X") ||
            (gameSquares[1] === "X" &&
                gameSquares[4] === "X" &&
                gameSquares[7] === "X") ||
            (gameSquares[2] === "X" &&
                gameSquares[5] === "X" &&
                gameSquares[8] === "X") ||
            (gameSquares[0] === "X" &&
                gameSquares[4] === "X" &&
                gameSquares[8] === "X") ||
            (gameSquares[2] === "X" &&
                gameSquares[4] === "X" &&
                gameSquares[6] === "X")
        ) {
            setGameResult("Player One Won");
            setEnded(true);
        } else if (
            (gameSquares[0] === "O" &&
                gameSquares[1] === "O" &&
                gameSquares[2] === "O") ||
            (gameSquares[3] === "O" &&
                gameSquares[4] === "O" &&
                gameSquares[5] === "O") ||
            (gameSquares[6] === "O" &&
                gameSquares[7] === "O" &&
                gameSquares[8] === "O") ||
            (gameSquares[0] === "O" &&
                gameSquares[3] === "O" &&
                gameSquares[6] === "O") ||
            (gameSquares[1] === "O" &&
                gameSquares[4] === "O" &&
                gameSquares[7] === "O") ||
            (gameSquares[2] === "O" &&
                gameSquares[5] === "O" &&
                gameSquares[8] === "O") ||
            (gameSquares[0] === "O" &&
                gameSquares[4] === "O" &&
                gameSquares[8] === "O") ||
            (gameSquares[2] === "O" &&
                gameSquares[4] === "O" &&
                gameSquares[6] === "O")
        ) {
            setGameResult("Player Two Won");
            setEnded(true);
        } else if (count === 9) {
            setGameResult("Draw");
            setEnded(true);
        }
    }

    function restartGame() {
        setGameBoard(["", "", "", "", "", "", "", "", ""]);
        setEnded(false);
        setPlayer("X");
        setGameResult("");
        setCount(0);
    }
    return (
        <div>
            {ended ? (
                <div className="result">
                    <h1>{gameResult}</h1>
                    <button className="" onClick={restartGame}>
                        <h1>Retart Game</h1>
                    </button>
                </div>
            ) : (
                <div className="grid-board">
                    {gameBoard.map((square, index) => (
                        <Square
                            click={() => squareClick(index)}
                            key={index}
                            id={index}
                            square={square}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
