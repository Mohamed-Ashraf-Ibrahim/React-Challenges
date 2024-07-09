import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNextPlayer, setIsXNextPlayer] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  function handleSquareClick(i) {
    if (squares[i] || gameOver) return;
    const nextSquare = [...squares];
    nextSquare[i] = isXNextPlayer ? "X" : "O";
    setSquares(nextSquare);
    setIsXNextPlayer(!isXNextPlayer);

    let winner = calculateWinner(nextSquare);
    if (winner) return setGameOver(true);
  }

  function renderSquares(i) {
    return (
      <Square
        value={squares[i]}
        key={i}
        onSquareClick={() => handleSquareClick(i)}
      />
    );
  }

  let winner = calculateWinner(squares);
  let curPlayer;

  return (
    <>
      <div className="status">
        {curPlayer !== "X" ? `Next Player: ${isXNextPlayer ? "X" : "O"}` : "X"}
      </div>
      <div className="board-row">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="board-row">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="board-row">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
