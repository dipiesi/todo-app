import { createContext, useState } from "react";
import DATA from "../../data";

import { createId } from "../../utilities/utilities";

export const TodoListContext = createContext({
  completedItems: [],
  uncompletedItems: [],
  currentPage: "", // "UNCOMPLETED" 'UNCOMPLETED' or 'ALL'
  changeItemState: () => {},
  editItem: () => {},
  deleteItem: () => {},
  addItem: () => {},
  changePage: () => {},
});

export default function TodoListContextProvider({ children }) {
  const [todoListState, setTodoListState] = useState({
    items: DATA,
    currentPage: "UNCOMPLETED",
  });

  function handlePageChange(toPage) {
    setTodoListState((prevState) => {
      return { ...prevState, currentPage: toPage };
    });
  }

  function handleChangeItemState(itemId) {
    setTodoListState((prevState) => {
      const item = prevState.items.find((item) => item.id === itemId);
      item.completed = !item.completed;
      return { ...prevState };
    });
  }

  function handleEditItem(itemId, newText) {
    setTodoListState((prevState) => {
      const item = prevState.items.find((item) => item.id === itemId);
      item.todo = newText;
      return { ...prevState };
    });
  }

  function handleItemDeletion(itemId) {
    setTodoListState((prevState) => {
      const newItemList = prevState.items.filter((item) => item.id !== itemId);
      return { ...prevState, items: newItemList };
    });
  }

  function handleAddItem() {
    setTodoListState((prevState) => {
      const newItem = {
        id: createId(prevState.items),
        todo: `Task #${
          [...prevState.items].filter((item) => !item.completed).length + 1
        }`,
        completed: false,
      };
      if (prevState.currentPage === "COMPLETED") {
        handlePageChange("UNCOMPLETED");
      }
      return { ...prevState, items: [...prevState.items, newItem] };
    });
  }

  const ctxValue = {
    completedItems: todoListState.items.filter((item) => item.completed),
    uncompletedItems: todoListState.items.filter((item) => !item.completed),
    currentPage: todoListState.currentPage,
    changeItemState: handleChangeItemState,
    editItem: handleEditItem,
    deleteItem: handleItemDeletion,
    addItem: handleAddItem,
    changePage: handlePageChange,
  };

  return (
    <TodoListContext.Provider value={ctxValue}>
      {children}
    </TodoListContext.Provider>
  );
}
