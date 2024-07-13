import { Rate } from "./Rate";
import { SubmitButton } from "./SubmitButton";

export function Ratings({ selected, onRate, showModal, onShow }) {
  // Solution with useEffect Hook
  // useEffect(() => {
  //   // Find the selected rating
  //   const selectedRating = selected.findIndex((rate) => rate) + 1;
  //   setRate(selectedRating);
  // }, [selected]); // Run this effect whenever 'selected' changed

  return (
    <>
      <div className="ratings">
        {Array.from({ length: 5 }, (_, i) => (
          <Rate
            key={i}
            number={i + 1}
            onRate={() => onRate(i)}
            selected={selected[i]}
          />
        ))}
      </div>
      {/* {selected ? <SubmittedModal rate={rate} /> : null} */}
      <SubmitButton showModal={showModal} onShow={onShow} />
      {/* {showModal ? <SubmittedModal rate={rate} /> : null} */}
    </>
  );
}
