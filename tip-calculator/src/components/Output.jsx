export default function Output({ bill, tip }) {
  return (
    <h4>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h4>
  );
}
