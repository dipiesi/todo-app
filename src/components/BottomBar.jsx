import { formatDate, getWeekday } from "../utilities/utilities";

export default function BottomBar() {
  const date = new Date();
  return (
    <section className="bottom-bar">
      <p>
        <strong>{getWeekday(date)}</strong> - {formatDate(date)}
      </p>
      <span className="material-symbols-outlined icon">add_circle</span>
    </section>
  );
}
