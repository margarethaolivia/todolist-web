import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    setTasks([{ id: Date.now(), text: newTask, completed: false }, ...tasks]);
    setNewTask("");
  };

  const handleToggle = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">My Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-row">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter a new task..."
          className="flex-grow px-3 py-2 border rounded-md mr-2 focus:outline-none focus:border-blue-500 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <div className="grid gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="mr-3 cursor-pointer h-4 w-4"
              />
              <span
                className={`flex-grow ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-400 rounded-full p-2 hover:text-red-300 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTrash} className="text-lg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
