export default function PaginationButtons({ onPageChange, currentPage }) {
  function handleClick(selectedPage) {
    onPageChange(selectedPage);
  }

  return (
    <div className="pagination-container">
      <button
        onClick={() => handleClick("not-done")}
        className={"pagination-btn " + (currentPage === "not-done" && "active")}
      >
        <span className="material-symbols-outlined icon">
          radio_button_unchecked
        </span>
        <div className="custom-line"></div>
      </button>
      <button
        onClick={() => handleClick("done")}
        className={"pagination-btn " + (currentPage === "done" && "active")}
      >
        <span className="material-symbols-outlined icon">check_circle</span>
        <div className="custom-line"></div>
      </button>
    </div>
  );
}
