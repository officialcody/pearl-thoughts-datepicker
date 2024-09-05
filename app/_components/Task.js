"use client";
import { FaPlus } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { useState } from "react";
import useStore from "../_store/useStore";

export default function Task({ setOpenModal, openModal }) {
  const [task, setTask] = useState("");
  const { tasks, addTask, removeTask } = useStore();

  const handleAddTask = () => {
    addTask({ name: task });
    console.log(tasks);
  };

  const handleCalenderClick = (event) => {
    setOpenModal(!openModal);
  };

  return (
    <div className="mx-auto my-2">
      <h1 className="text-2xl font-bold text-center">Add Task/Event</h1>
      <div className="my-4 relative w-full flex flex-row">
        <button
          className={`absolute text-gray-400 p-3 rounded-full right-0 ${
            task === "" ? "" : "hover:text-gray-900"
          }`}
          disabled={task === ""}
          onClick={handleAddTask}
        >
          <FaPlus />
        </button>
        <button
          className={`absolute text-gray-400 p-3 rounded-full right-6 hover:text-gray-900`}
          onClick={handleCalenderClick}
        >
          <IoCalendar
            className={openModal ? "text-gray-900" : "text-gray-400"}
          />
        </button>
        <input
          className="border px-3 py-2 rounded-md w-full"
          type="text"
          name="task"
          value={task}
          placeholder="Add task here"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
    </div>
  );
}
