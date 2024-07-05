export default function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-input">
      <label>How Much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
