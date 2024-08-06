import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const host = "api.frankfurter.app";
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://${host}/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching Data!");
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      } catch (err) {
        console.error("Error Fetching data:", err);
      }
    }
    if (toCur === fromCur) return setConverted(amount);
    fetchData();
  }, [amount, fromCur, toCur]);

  return (
    <div className="currency-converter">
      <input
        type="text"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount > 0 ? amount : ""}
        className="input-amount"
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
        className="select-currency"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
        className="select-currency"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p className="converted-amount">
        {Number(converted).toFixed(2)} {toCur}
      </p>
    </div>
  );
}

export default App;
