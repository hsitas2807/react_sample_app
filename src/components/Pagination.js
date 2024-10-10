const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  