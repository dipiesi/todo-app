import { useMemo, useState } from "react";

import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import DATA from "../data.js";

import { createId } from "../utilities/utilities.js";

const Pages = {
  NOT_DONE: "not-done",
  DONE: "done",
};

export default function TodoCard() {
  const [currentPage, setCurrentPage] = useState(Pages.NOT_DONE);
  const [items, setItems] = useState([...DATA]);

  const todoList = useMemo(() => {
    return items.filter((item) =>
      currentPage === Pages.NOT_DONE ? !item.completed : item.completed
    );
  }, [items, currentPage]);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function handleItemStateChange(itemId) {
    setItems((prevList) => {
      const item = items.find((item) => item.id === itemId);
      item.completed = !item.completed;
      return [...prevList];
    });
  }

  function handleItemDeletion(itemId) {
    setItems((prevList) => prevList.filter((item) => item.id !== itemId));
  }

  function handleAddItem() {
    const newItem = {
      id: createId(items),
      todo: `Task #${[...items].filter((item) => !item.completed).length + 1}`,
      completed: false,
    };
    setItems((prevList) => [...prevList, newItem]);
    setCurrentPage(Pages.NOT_DONE);
  }

  function handleEditItem(itemId, newTodo) {
    setItems((prevList) => {
      const item = items.find((item) => item.id === itemId);
      item.todo = newTodo;
      return [...prevList];
    });
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
