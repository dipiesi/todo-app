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
      </button>
      <button
        onClick={() => handleClick("done")}
        className={"pagination-btn " + (currentPage === "done" && "active")}
      >
        <span className="material-symbols-outlined icon">check_circle</span>
      </button>
    </div>
  );
}
