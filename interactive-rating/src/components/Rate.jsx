export function Rate({ number, onRate, selected }) {
  return (
    <div>
      <ul>
        <li>
          <button className={selected ? "selected" : "btn"} onClick={onRate}>
            {number}
          </button>
        </li>
      </ul>
    </div>
  );
}
