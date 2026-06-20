import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updated = transactions.filter(
      (_, i) => i !== index
    );
    setTransactions(updated);
  };

  const filteredTransactions = transactions.filter(
    (item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : item.type === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const exportCSV = () => {
    const rows = [
      ["Title", "Amount", "Type", "Date"],
      ...transactions.map((t) => [
        t.title,
        t.amount,
        t.type,
        t.date,
      ]),
    ];

    const csvContent = rows
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text(
      "Expense Tracker Report",
      20,
      20
    );

    autoTable(doc, {
      head: [["Title", "Amount", "Type", "Date"]],
      body: transactions.map((t) => [
        t.title,
        t.amount,
        t.type,
        t.date,
      ]),
    });

    doc.save("Expense_Report.pdf");
  };

  return (
    <div className="container">
      <h1>💰 Expense Tracker Dashboard</h1>

      <Summary transactions={transactions} />

      <div className="card">
        <button onClick={exportCSV}>
          📥 Export CSV
        </button>

        <button
          onClick={downloadPDF}
          style={{ marginLeft: "10px" }}
        >
          📄 Download PDF
        </button>
      </div>

      <ExpenseForm
        addTransaction={addTransaction}
      />

      <div className="card">
        <input
          type="text"
          placeholder="🔍 Search Transaction"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <br />
        <br />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="all">All</option>
          <option value="income">
            Income
          </option>
          <option value="expense">
            Expense
          </option>
        </select>
      </div>

      <ExpenseChart
        transactions={transactions}
      />

      <ExpenseList
        transactions={filteredTransactions}
        deleteTransaction={
          deleteTransaction
        }
      />
    </div>
  );
}

export default App;