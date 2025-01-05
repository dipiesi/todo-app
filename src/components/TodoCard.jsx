import { useState } from "react";

import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import DATA from "../data.js";

import { createId } from "../utilities/utilities.js";

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

  function handleAddItem() {
    const newItem = {
      id: createId(ITEMS),
      todo: `Task #${ITEMS.length}`,
      completed: false,
    };
    ITEMS.push(newItem);
    handlePageChange("not-done");
  }

  function handleEditItem(itemId, newTodo) {
    const item = ITEMS.find((item) => item.id === itemId);
    item.todo = newTodo;
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
      <TodoList
        list={todoList}
        onItemStateChange={handleItemStateChange}
        onItemDeletion={handleItemDeletion}
        onItemEdit={handleEditItem}
      />
      <BottomBar onAddItem={handleAddItem} />
    </section>
  );
}
