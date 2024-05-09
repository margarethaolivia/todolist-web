import React, { useState, useRef, useEffect } from "react";

const TaskForm = ({ handleSubmit }) => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    handleSubmit(newTask);
    setNewTask("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 flex flex-row">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Enter a new task..."
        className="flex-grow px-3 py-2 border rounded-md mr-2 focus:outline-none focus:border-blue-500 text-black"
        ref={inputRef}
        autoFocus
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
