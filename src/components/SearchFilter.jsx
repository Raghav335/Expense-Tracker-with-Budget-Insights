function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div className="card search-card">
      <h2>🔍 Search & Filter</h2>

      <input
        type="text"
        placeholder="Search Transaction..."
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
        <option value="all">📋 All</option>
        <option value="income">💰 Income</option>
        <option value="expense">💸 Expense</option>
      </select>
    </div>
  );
}

export default SearchFilter;