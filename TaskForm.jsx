export default function FilterBar({ filter, onFilterChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? "active" : ""}`}
          onClick={() => onFilterChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
