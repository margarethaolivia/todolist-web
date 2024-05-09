import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      return sortTasks(updatedTasks);
    });
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (newTask) => {
    setTasks((prevTasks) => [
      { id: Date.now(), text: newTask, completed: false },
      ...prevTasks,
    ]);
  };

  const sortTasks = (tasksArray) => {
    const incompleteTasks = tasksArray.filter((task) => !task.completed);
    const completedTasks = tasksArray.filter((task) => task.completed);
    return [...incompleteTasks, ...completedTasks];
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">My Todo List</h1>
      <TaskForm handleSubmit={handleSubmit} />
      <div className="grid gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
