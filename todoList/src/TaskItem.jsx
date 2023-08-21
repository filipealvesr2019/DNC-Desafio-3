import React from 'react';
const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span>{task}</span>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default TaskItem;
