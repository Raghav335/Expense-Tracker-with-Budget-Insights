function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary-grid">

      <div className="card income-card">
        <h2>💰 Income</h2>
        <h3>₹{income}</h3>
      </div>

      <div className="card expense-card">
        <h2>💸 Expense</h2>
        <h3>₹{expense}</h3>
      </div>

      <div className="card balance-card">
        <h2>🏦 Balance</h2>
        <h3>₹{balance}</h3>
      </div>

    </div>
  );
}

export default Summary;