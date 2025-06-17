const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >Previous</button>

      {pages.map((page) => (
        <button
          key={page}
          style={{
            margin: "0 5px",
            fontWeight: currentPage === page ? "bold" : "normal",
          }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >Next</button>
    </div>
  );
};

export default Pagination;
