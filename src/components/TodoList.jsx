import { use } from "react";

import TodoItem from "./TodoItem";
import { TodoListContext } from "./store/todo-list-context";

export default function TodoList() {
  const { currentPage, completedItems, uncompletedItems } =
    use(TodoListContext);

  let list;

  if (currentPage === "UNCOMPLETED") list = uncompletedItems;
  else if (currentPage === "COMPLETED") list = completedItems;
  else if (currentPage === "ALL")
    list = [...uncompletedItems, ...completedItems];

  return (
    <ul>
      {list.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
