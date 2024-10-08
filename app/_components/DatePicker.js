"use client";

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import CalenderDates from "./CalenderDates";
import Task from "./Task";
import Modal from "./Modal";
import RecurrenceOptions from "./RecurrenceOptions";
import useStore from "../_store/useStore";

export default function DatePicker() {
  const { currentMonth, currentYear, setCurrentMonth, setCurrentYear } =
    useStore();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="m-auto mt-20 bg-background rounded-lg border p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <button
          className="p-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white"
          onClick={handlePreviousMonth}
        >
          <MdOutlineNavigateBefore className="w-4 h-4" />
        </button>
        <div className="text-lg font-medium">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button
          className="p-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white"
          onClick={handleNextMonth}
        >
          <MdOutlineNavigateNext className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-black">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="text-center text-xs text-black">
            {" "}
          </div>
        ))}
        <CalenderDates currentYear={currentYear} currentMonth={currentMonth} />
      </div>
      <Task />
      <Modal>
        <RecurrenceOptions />
      </Modal>
    </div>
  );
}
