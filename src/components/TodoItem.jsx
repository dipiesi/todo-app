import { use } from "react";
import { TodoListContext } from "./store/todo-list-context";

export default function TodoItem({ item }) {
  const { changeItemState, editItem, deleteItem } = use(TodoListContext);

  return (
    <li>
      <div className="item-card">
        <span
          className="material-symbols-outlined icon checkbox"
          onClick={() => changeItemState(item.id)}
        >
          {item.completed ? "check_circle" : "radio_button_unchecked"}
        </span>
        <input
          value={item.todo}
          onChange={(e) => editItem(item.id, e.target.value)}
          className={item.completed ? "completed" : undefined}
        />
        <span
          className="material-symbols-outlined icon"
          onClick={() => deleteItem(item.id)}
        >
          remove
        </span>
      </div>
    </li>
  );
}
