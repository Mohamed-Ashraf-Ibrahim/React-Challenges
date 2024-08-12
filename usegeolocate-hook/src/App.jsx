import { useState } from "react";
import useGeoLocate from "./useGeoLocate";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    position: { lat, lng },
    isLoading,
    error,
    getPosition,
  } = useGeoLocate();

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div className="app-container">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="get-position-button"
      >
        Get my position
      </button>

      {isLoading && <p className="loading">Loading position...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p className="position">
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            className="position-link"
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p className="click-count">You requested position {countClicks} times</p>
    </div>
  );
}
