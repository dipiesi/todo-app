import { useState } from "react";

import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import ITEMS from "../data.js";

export default function TodoCard() {
  const [currentPage, setCurrentPage] = useState("not-done");

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  let listItems;

  if (currentPage === "done") {
    listItems = ITEMS.filter((item) => item.completed);
  } else {
    listItems = ITEMS.filter((item) => !item.completed);
  }

  return (
    <section className="list-container">
      <PaginationButtons
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <TodoList list={listItems} />
      <BottomBar />
    </section>
  );
}
