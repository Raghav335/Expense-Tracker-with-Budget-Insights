import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

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
        "#22c55e", // Green
        "#ef4444", // Red
      ],
      borderColor: "#ffffff",
      borderWidth: 3,
    },
  ],
};

  return (
    <div className="card">
      <h2>Expense Chart</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;