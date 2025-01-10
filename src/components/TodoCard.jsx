import PaginationButtons from "./Pagination Buttons/PaginationButtons";
import TodoList from "./TodoList";
import BottomBar from "./BottomBar.jsx";
import TodoListContextProvider from "./store/todo-list-context.jsx";

export default function TodoCard() {
  return (
    <TodoListContextProvider>
      <section className="list-container">
        <PaginationButtons />
        <TodoList />
        <BottomBar />
      </section>
    </TodoListContextProvider>
  );
}
