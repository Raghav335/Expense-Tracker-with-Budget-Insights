function Summary({ transactions }) {

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const savings =
    income > 0
      ? ((balance / income) * 100).toFixed(1)
      : 0;

  return (

    <div className="summary-grid">

      <div className="card income-card">

        <h2>💰 Income</h2>

        <h1>₹{income}</h1>

        <p>Total Income</p>

      </div>

      <div className="card expense-card">

        <h2>💸 Expense</h2>

        <h1>₹{expense}</h1>

        <p>Total Expense</p>

      </div>

      <div className="card balance-card">

        <h2>🏦 Balance</h2>

        <h1>₹{balance}</h1>

        <p>Current Balance</p>

      </div>

      <div className="card savings-card">

        <h2>🎯 Savings</h2>

        <h1>{savings}%</h1>

        <p>Saving Rate</p>

      </div>

      <div
        className="card"
        style={{
          gridColumn: "1/-1",
          marginTop: "10px",
        }}
      >

        <h2>💡 Budget Insights</h2>

        <br />

        <p>

          {balance > 0
            ? "✅ Great! You are saving money. Keep tracking your expenses."
            : "⚠ Your expenses are higher than your income. Try reducing unnecessary spending."}

        </p>

        <br />

        <p>

          📈 Income :
          <strong> ₹{income}</strong>

        </p>

        <p>

          💸 Expense :
          <strong> ₹{expense}</strong>

        </p>

        <p>

          🏦 Balance :
          <strong> ₹{balance}</strong>

        </p>

      </div>

    </div>

  );
}

export default Summary;