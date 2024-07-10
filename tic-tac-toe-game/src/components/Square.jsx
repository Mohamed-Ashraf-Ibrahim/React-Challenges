import Button from "./Button";
// Square Component
export function Square({ value,  onSquareClick }) {
  return <Button onClick={onSquareClick}>{value}</Button>;
}
