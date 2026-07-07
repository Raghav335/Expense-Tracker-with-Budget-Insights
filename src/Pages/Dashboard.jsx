import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ExportButtons from "../components/ExportButtons";
import SearchFilter from "../components/SearchFilter";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";
import ExpenseChart from "../components/ExpenseChart";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Toaster } from "react-hot-toast";

import "../App.css";

function Dashboard() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updated = transactions.filter(
      (_, i) => i !== index
    );
    setTransactions(updated);
  };

  const filteredTransactions =
    transactions.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : item.type === filter;

      return (
        matchesSearch &&
        matchesFilter
      );

    });

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
      {
        type: "text/csv",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };const downloadPDF = () => {

    const doc = new jsPDF();

    doc.text(
      "Expense Tracker Report",
      20,
      20
    );

    autoTable(doc, {
      head: [
        [
          "Title",
          "Amount",
          "Type",
          "Date",
        ],
      ],

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

    <div
      className={
        darkMode
          ? "container dark"
          : "container"
      }
    >

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Summary
        transactions={transactions}
      />

      <ExportButtons
        exportCSV={exportCSV}
        downloadPDF={downloadPDF}
      />

      <ExpenseForm
        addTransaction={addTransaction}
      />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ExpenseChart
        transactions={transactions}
      />

      <ExpenseList
        transactions={filteredTransactions}
        deleteTransaction={
          deleteTransaction
        }
      /><Footer />

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </div>

  );
}

export default Dashboard;