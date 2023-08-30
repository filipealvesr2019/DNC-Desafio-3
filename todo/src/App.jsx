import React, { useState } from 'react';
import './App.scss';
function TodoList() {
  const [tasks, setTasks] = useState;
  const [currentTask, setCurrentTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleTaskChange = (e) => {
    setCurrentTask(e.target.value)
  }

  const handleTaskAdd = () =>{
    if(currentTask.trim() !== ""){
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
      setIsAddingTask(false)

    }
  }

  const handleAddButtonClick = () => {
    isAddingTask(true);
  }
  return (
    <div>
      <div className="container">
        <div className="bottom-left">
          <div className="word">Organização</div>
          <div className="word background-word">Tarefas</div>
        </div>
      </div>
      <div className='container-body'>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <div className='header-title'>
        <h2>Tarefa</h2>
        <h2>Status</h2>
        <h2>Opções</h2>
        </div>
        <div className="line-container">
          <div className="line"></div>
          </div>
          <div className='task-container'>         
          <h3 className="icon-style">Nova tarefa...</h3>
          </div>
      </div>
    </div>
  )
}



export default TodoList;

