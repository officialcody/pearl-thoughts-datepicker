export default function CalenderDates({
  selectedDate,
  setSelectedDate,
  currentMonth,
  currentYear,
}) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDateClick = (date) => {
    setSelectedDate(new Date(currentYear, currentMonth, date));
  };

  return Array.from({ length: daysInMonth }, (_, i) => (
    <button
      key={i + 1}
      className={`rounded-full w-8 h-8 text-center text-sm transition-colors hover:bg-muted ${
        selectedDate.getDate() === i + 1 &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear
          ? "bg-black text-white"
          : "text-black"
      }`}
      onClick={() => handleDateClick(i + 1)}
    >
      {i + 1}
    </button>
  ));
}
