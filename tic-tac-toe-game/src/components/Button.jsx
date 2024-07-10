export default function Button({ children, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {children}
    </button>
  );
}
