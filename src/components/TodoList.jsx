import TodoItem from "./TodoItem";

export default function TodoList({ list }) {
  return (
    <ul>
      {list.map((item, itemIndex) => (
        <TodoItem key={itemIndex} item={item} />
      ))}
    </ul>
  );
}
