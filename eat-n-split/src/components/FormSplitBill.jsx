import { useState } from "react";

export function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  return (
    <form className="form-split-bill">
      <h2>Split Bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill > 0 ? bill : ""}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <label>🧍Your expense</label>
      <input
        type="text"
        value={paidByUser > 0 ? paidByUser : ""}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>
      <label>👫{selectedFriend.name} expense</label>
      <input type="text" disabled value={Math.abs(paidByFriend)}></input>
      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </form>
  );
}
