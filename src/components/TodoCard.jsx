import PaginationButtons from "./PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import ITEMS from "../data.js";

export default function TodoCard() {
  return (
    <section className="list-container">
      <PaginationButtons />
      <TodoList list={ITEMS} />
      <BottomBar />
    </section>
  );
}
