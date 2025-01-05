import { useState } from "react";

import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import DATA from "../data.js";

let ITEMS = [...DATA];

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
    const item = ITEMS.find((item) => item.id === itemId);
    item.completed = !item.completed;

    if (currentPage === "not-done") {
      setTodoList(ITEMS.filter((item) => !item.completed));
    } else if (currentPage === "done") {
      setTodoList(ITEMS.filter((item) => item.completed));
    }
  }

  function handleItemDeletion(itemId) {
    ITEMS = ITEMS.filter((item) => item.id !== itemId);
    setTodoList((prevList) => prevList.filter((item) => item.id !== itemId));
  }

  return (
    <section className="list-container">
      <PaginationButtons
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <TodoList
        list={todoList}
        onItemStateChange={handleItemStateChange}
        onItemDeletion={handleItemDeletion}
      />
      <BottomBar />
    </section>
  );
}
