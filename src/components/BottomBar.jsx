import { formatDate, getWeekday } from "../utilities/utilities";
import { use } from "react";
import { TodoListContext } from "./store/todo-list-context";

export default function BottomBar() {
  const date = new Date();

  const { addItem } = use(TodoListContext);

  return (
    <section className="bottom-bar">
      <p>
        <strong>{getWeekday(date)}</strong> - {formatDate(date)}
      </p>
      <span onClick={addItem} className="material-symbols-outlined icon">
        add_circle
      </span>
    </section>
  );
}
