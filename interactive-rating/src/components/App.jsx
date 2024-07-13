import { Text } from "./Text";
import { Ratings } from "./Ratings";
import SubmittedModal from "./SubmittedModal";
import Star from "./Star";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(Array(5).fill(false));
  const [rate, setRate] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleRating(rating) {
    const updatedSelected = selected.map((_, i) => i === rating);
    setSelected(updatedSelected);
    setRate(rating + 1);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <div className="container">
      <div className={showModal ? "component hidden" : "component"}>
        <Star />
        <Text />
        <Ratings
          selected={selected}
          showModal={showModal}
          onRate={handleRating}
          onShow={handleShowModal}
        />
      </div>
      {showModal && <SubmittedModal rate={rate} />}
    </div>
  );
}

export default App;
