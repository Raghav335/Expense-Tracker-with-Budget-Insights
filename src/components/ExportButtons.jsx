function ExportButtons({ exportCSV, downloadPDF }) {
  return (
    <div className="card export-card">
      <h2>📤 Export Reports</h2>

      <div className="export-buttons">
        <button
          className="csv-btn"
          onClick={exportCSV}
        >
          📥 Export CSV
        </button>

        <button
          className="pdf-btn"
          onClick={downloadPDF}
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}

export default ExportButtons;