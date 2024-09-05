import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  selectedDate: new Date(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  recurringOptionValue: "once",
  recurringOptionFrequency: 1,
  showRecurrenceModal: false,

  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  setSelectedDate: (date) => set(() => ({ selectedDate: date })),
  setCurrentMonth: (month) => set(() => ({ currentMonth: month })),
  setCurrentYear: (year) => set(() => ({ currentYear: year })),
  setRecurringOptionValue: (value) =>
    set(() => ({ recurringOptionValue: value })),
  setRecurringOptionFrequency: (value) =>
    set(() => ({ recurringOptionFrequency: value })),
  setShowRecurrenceModal: (value) =>
    set(() => ({ showRecurrenceModal: value })),
}));

export default useStore;
