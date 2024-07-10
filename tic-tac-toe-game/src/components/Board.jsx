import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNextPlayer, setIsXNextPlayer] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  function handleSquareClick(i) {
    if (squares[i] || gameOver) return;
    const nextSquares = [...squares];
    nextSquares[i] = isXNextPlayer ? "X" : "O";
    setSquares(nextSquares);
    setIsXNextPlayer(!isXNextPlayer);

    let winner = calculateWinner(nextSquares);
    if (winner) setGameOver(true);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        key={i}
        onSquareClick={() => handleSquareClick(i)}
      />
    );
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsXNextPlayer(true);
    setGameOver(false);
  }

  let winner = calculateWinner(squares);
  let status = winner
    ? `Winner: ${winner}`
    : !squares.includes(null)
    ? "Draw!"
    : `Next Player: ${isXNextPlayer ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-btn" onClick={handleReset}>
        Reset Game
      </button>
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
