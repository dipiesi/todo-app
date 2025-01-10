import { use } from "react";
import { TodoListContext } from "../store/todo-list-context";

export default function PaginationButtons() {
  const { changePage, currentPage } = use(TodoListContext);

  function handleClick(selectedButton) {
    if (
      (currentPage === "COMPLETED" && selectedButton === "UNCOMPLETED") ||
      (currentPage === "UNCOMPLETED" && selectedButton === "COMPLETED")
    ) {
      changePage("ALL");
    } else if (currentPage === "ALL") {
      changePage(selectedButton === "COMPLETED" ? "UNCOMPLETED" : "COMPLETED");
      // changePage(selectedButton);
    }
  }

  return (
    <div className="pagination-container">
      <button
        onClick={() => handleClick("UNCOMPLETED")}
        className={
          "pagination-btn " +
          ((currentPage === "UNCOMPLETED" || currentPage === "ALL") && "active")
        }
      >
        <span className="material-symbols-outlined icon">
          radio_button_unchecked
        </span>
        <div className="custom-line"></div>
      </button>
      <button
        onClick={() => handleClick("COMPLETED")}
        className={
          "pagination-btn " +
          ((currentPage === "COMPLETED" || currentPage === "ALL") && "active")
        }
      >
        <span className="material-symbols-outlined icon">check_circle</span>
        <div className="custom-line"></div>
      </button>
    </div>
  );
}
