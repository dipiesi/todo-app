import TodoItem from "./TodoItem";

export default function TodoList({ list, onItemStateChange }) {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemStateChange={onItemStateChange}
        />
      ))}
    </ul>
  );
}
