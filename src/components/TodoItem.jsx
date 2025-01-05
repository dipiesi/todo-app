export default function TodoItem({ item, onItemStateChange }) {
  return (
    <li>
      <div className="item-card">
        <span
          className="material-symbols-outlined icon"
          onClick={() => onItemStateChange(item.id)}
        >
          {item.completed ? "check_circle" : "radio_button_unchecked"}
        </span>
        <p className={item.completed ? "completed" : undefined}>{item.todo}</p>
        <span className="material-symbols-outlined icon">remove</span>
      </div>
    </li>
  );
}
