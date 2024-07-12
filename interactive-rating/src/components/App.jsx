
import { Text } from "./Text";
import { Ratings } from "./Ratings";
import { SubmitButton } from "./SubmitButton";
import Star from "./Star";

function App() {
  return (
    <div className="container">
      <div className="component">
        <Star />
        <Text />
        <Ratings />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
