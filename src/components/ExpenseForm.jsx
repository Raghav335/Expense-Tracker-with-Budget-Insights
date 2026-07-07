import { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = () => {
    if (!title || !amount) return;

    addTransaction({
      title,
      amount: Number(amount),
      type,
      date,
    });

    setTitle("");
    setAmount("");
    setType("expense");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="card form-card">

      <h2>➕ Add New Transaction</h2>
      <p>Record your income and expenses easily.</p>

      <input
        type="text"
        placeholder="📝 Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="💰 Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">💰 Income</option>
        <option value="expense">💸 Expense</option>
      </select>

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        ➕ Add Transaction
      </button>

    </div>
  );
}

export default ExpenseForm;