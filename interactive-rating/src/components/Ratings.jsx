import { useState } from "react";
import { Rate } from "./Rate";

export function Ratings() {
  const [selected, setSelected] = useState(Array(5).fill(false));

  function handleRating(rating) {
    const updatedSelected = selected.map((_, i) => i === rating);
    setSelected(updatedSelected);
  }

  return (
    <>
      <div className="ratings">
        {Array.from({ length: 5 }, (_, i) => (
          <Rate
            key={i}
            number={i + 1}
            onRate={() => handleRating(i)}
            selected={selected[i]}
          />
        ))}
      </div>
      <p>{selected.findIndex((rate) => rate) + 1}</p>
    </>
  );
}
