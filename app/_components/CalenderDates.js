import useStore from "../_store/useStore";

export default function CalenderDates({ currentMonth, currentYear }) {
  const { selectedDate, setSelectedDate } = useStore();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const isSelectedDate = (index) =>
    selectedDate.getDate() === index + 1 &&
    selectedDate.getMonth() === currentMonth &&
    selectedDate.getFullYear() === currentYear;

  const handleDateClick = (date) => {
    setSelectedDate(new Date(currentYear, currentMonth, date));
  };

  return Array.from({ length: daysInMonth }, (_, i) => (
    <button
      key={i + 1}
      className={`rounded-full w-8 h-8 text-center text-sm transition-colors hover:bg-blue-200 ${
        isSelectedDate(i)
          ? "bg-blue-600 text-white hover:text-black"
          : "text-black"
      }`}
      onClick={() => handleDateClick(i + 1)}
    >
      {i + 1}
    </button>
  ));
}
