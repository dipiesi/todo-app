import { useState } from "react";

import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import ITEMS from "../data.js";

export default function TodoCard() {
  const [currentPage, setCurrentPage] = useState("not-done");
  const [todoList, setTodoList] = useState(
    ITEMS.filter((item) => !item.completed)
  );

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
    if (newPage === "not-done") {
      setTodoList(ITEMS.filter((item) => !item.completed));
    } else if (newPage === "done") {
      setTodoList(ITEMS.filter((item) => item.completed));
    }
  }

  function handleItemStateChange(itemId) {
    const item = ITEMS.filter((item) => item.id === itemId)[0];
    item.completed = !item.completed;

    if (currentPage === "not-done") {
      setTodoList(ITEMS.filter((item) => !item.completed));
    } else if (currentPage === "done") {
      setTodoList(ITEMS.filter((item) => item.completed));
    }
  }

  return (
    <section className="list-container">
      <PaginationButtons
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <TodoList list={todoList} onItemStateChange={handleItemStateChange} />
      <BottomBar />
    </section>
  );
}
