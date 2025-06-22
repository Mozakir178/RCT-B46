const IdeaFilterSort = ({ filter, setFilter, sortBy, setSortBy }) => {
  return (
    <div className="filters">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Art">Art</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Random">Random</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="urgencyHigh">Urgency: High → Low</option>
        <option value="urgencyLow">Urgency: Low → High</option>
        <option value="newest">Newest → Oldest</option>
        <option value= "nameAsc">A-Z</option>
      </select>
    </div>
  );
};

export default IdeaFilterSort;
