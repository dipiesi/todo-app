import TodoItem from "./TodoItem";

export default function TodoList({ list, onItemStateChange, onItemDeletion }) {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemStateChange={onItemStateChange}
          onItemDeletion={onItemDeletion}
        />
      ))}
    </ul>
  );
}
