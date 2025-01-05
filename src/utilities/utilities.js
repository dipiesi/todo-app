export function getWeekday(date) {
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  return dayOfWeek;
}

export function formatDate(date) {
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    date
  );

  return `${month} ${day}, ${year}`;
}
