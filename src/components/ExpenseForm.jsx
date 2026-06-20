import { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = () => {
    if (!title || !amount) return;

    addTransaction({
  title,
  amount: Number(amount),
  type,
  date: new Date().toLocaleDateString(),
});
    setTitle("");
    setAmount("");
  };

  return (
    <div className="card">
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ExpenseForm;