function ExpenseList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div className="card">
      <h2>📋 Transactions</h2>

      {transactions.length === 0 ? (
        <p>No Transactions Yet</p>
      ) : (
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
                
                <td>₹{item.amount}</td>
                <td>{item.type}</td>
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
      )}
    </div>
  );
}

export default ExpenseList;