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

  const data = {
    labels: ["💰 Income", "💸 Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="card chart-container">
      <h2>📊 Income vs Expense</h2>

      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}

export default ExpenseChart;