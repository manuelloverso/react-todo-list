import { useState } from "react";

export default function Form({ addTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskInput) return;

    const newTask = {
      id: Date.now(),
      task: taskInput,
      isCompleted: false,
    };

    addTask(newTask);

    setTaskInput("");
  }

  return (
    <div className="add-task py-10 flex justify-around items-center">
      <span className="text-lg">Add a task in the list➡️</span>
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 rounded-lg text-gray-800"
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="ml-4 rounded-lg bg-sky-300 text-white p-2"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
