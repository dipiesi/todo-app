export default function PaginationButtons() {
  return (
    <div className="pagination-container">
      <button className="pagination-btn active">
        <span className="material-symbols-outlined icon">
          radio_button_unchecked
        </span>
      </button>
      <button className="pagination-btn">
        <span className="material-symbols-outlined icon">check_circle</span>
      </button>
    </div>
  );
}
