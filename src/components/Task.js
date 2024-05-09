import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, handleToggle, handleDelete }) => {
  return (
    <div className="border rounded-md p-4 flex items-center justify-between">
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
  );
};

export default Task;
