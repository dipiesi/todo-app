import TodoItem from "./TodoItem";

export default function TodoList({
  list,
  onItemStateChange,
  onItemDeletion,
  onItemEdit,
}) {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemStateChange={onItemStateChange}
          onItemDeletion={onItemDeletion}
          onItemEdit={onItemEdit}
        />
      ))}
    </ul>
  );
}
