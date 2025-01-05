import { useState } from "react";

export default function TodoItem({
  item,
  onItemStateChange,
  onItemDeletion,
  onItemEdit,
}) {
  const [isEditing, setEditing] = useState(false);
  const [todo, setTodo] = useState(item.todo);

  function handleEditClick() {
    setEditing(true);
  }

  function handleEditBlur() {
    setEditing(false);
    onItemEdit(item.id, todo);
  }

  function inputChange(event) {
    setTodo(event.target.value);
  }

  return (
    <li>
      <div className="item-card">
        <span
          className="material-symbols-outlined icon"
          onClick={() => onItemStateChange(item.id)}
        >
          {item.completed ? "check_circle" : "radio_button_unchecked"}
        </span>
        {isEditing ? (
          <input
            onChange={inputChange}
            onBlur={handleEditBlur}
            value={todo}
            autoFocus
          ></input>
        ) : (
          <p
            onClick={handleEditClick}
            className={item.completed ? "completed" : undefined}
          >
            {todo}
          </p>
        )}

        <span
          className="material-symbols-outlined icon"
          onClick={() => onItemDeletion(item.id)}
        >
          remove
        </span>
      </div>
    </li>
  );
}
