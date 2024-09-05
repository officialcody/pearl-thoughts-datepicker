import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  selectedDate: new Date(),
  setSelectedDate: (date) => set((state) => ({ selectedDate: date })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useStore;
