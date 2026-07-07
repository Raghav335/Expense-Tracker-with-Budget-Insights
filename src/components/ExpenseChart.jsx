import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart({ transactions }) {

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

  const data = {
    labels: [
      "Income",
      "Expense",
    ],

    datasets: [
      {
        data: [income, expense],
        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (

    <div className="card chart-card">

      <h2>📊 Financial Analytics</h2>

      <div className="chart-container">

        <Doughnut
          data={data}
          options={{
            responsive: true,

            plugins: {

              legend: {
                position: "bottom",
              },

            },

          }}
        />

      </div>

      <div className="chart-summary">

        <div>

          <h3>💰 Income</h3>

          <p>₹{income}</p>

        </div>

        <div>

          <h3>💸 Expense</h3>

          <p>₹{expense}</p>

        </div>

        <div>

          <h3>🎯 Savings</h3>

          <p>{savings}%</p>

        </div>

      </div>

    </div>

  );

}

export default ExpenseChart;