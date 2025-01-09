import { useState } from "react";

export default function TodoItem({
  item,
  onItemStateChange,
  onItemDeletion,
  onItemEdit,
}) {
  return (
    <li>
      <div className="item-card">
        <span
          className="material-symbols-outlined icon checkbox"
          onClick={() => onItemStateChange(item.id)}
        >
          {item.completed ? "check_circle" : "radio_button_unchecked"}
        </span>
        <input
          value={item.todo}
          onChange={(e) => onItemEdit(item.id, e.target.value)}
          className={item.completed ? "completed" : undefined}
        />
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
