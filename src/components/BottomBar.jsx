import { formatDate, getWeekday } from "../utilities/utilities";

export default function BottomBar({ onAddItem }) {
  const date = new Date();
  return (
    <section className="bottom-bar">
      <p>
        <strong>{getWeekday(date)}</strong> - {formatDate(date)}
      </p>
      <span onClick={onAddItem} className="material-symbols-outlined icon">
        add_circle
      </span>
    </section>
  );
}
