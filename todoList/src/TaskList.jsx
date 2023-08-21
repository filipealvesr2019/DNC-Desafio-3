import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
