function ExpenseList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div className="card transaction-card">

      <div className="table-header">

        <div>
          <h2>📋 Transaction History</h2>
          <p>
            Total Transactions :
            <strong> {transactions.length}</strong>
          </p>
        </div>

      </div>

      {transactions.length === 0 ? (

        <div className="empty-state">

          <h3>📭 No Transactions Found</h3>

          <p>
            Add your first income or expense to
            start tracking your budget.
          </p>

        </div>

      ) : (

        <div className="table-responsive">

          <table>

            <thead>

              <tr>

                <th>Title</th>

                <th>Amount</th>

                <th>Type</th>

                <th>Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((item, index) => (

                <tr key={index}>

                  <td>{item.title}</td>

                  <td>
                    ₹{item.amount}
                  </td>

                  <td>

                    <span
                      className={
                        item.type === "income"
                          ? "income-badge"
                          : "expense-badge"
                      }
                    >
                      {item.type}
                    </span>

                  </td>

                  <td>{item.date}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteTransaction(index)
                      }
                    >
                      🗑 Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default ExpenseList;