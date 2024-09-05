export default function CalenderDates({
  selectedDate,
  setSelectedDate,
  currentMonth,
  currentYear,
  recurringOptionValue,
}) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const isTodaysDate = (index) =>
    selectedDate.getDate() === index + 1 &&
    selectedDate.getMonth() === currentMonth &&
    selectedDate.getFullYear() === currentYear;

  return Array.from({ length: daysInMonth }, (_, i) => (
    <button
      key={i + 1}
      className={`rounded-full w-8 h-8 text-center text-sm transition-colors hover:bg-muted ${
        isTodaysDate(i) ? "bg-blue-600 text-white" : "text-black"
      }`}
    >
      {i + 1}
    </button>
  ));
}
