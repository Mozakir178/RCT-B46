const IdeaPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>
        Next
      </button>
    </div>
  );
};

export default IdeaPagination;
