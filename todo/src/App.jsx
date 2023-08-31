import React, { useState } from 'react';
import './App.scss';
import plus from '/images/plus.png';
import pen from '/images/pen.png'
import trash from '/images/trash-can.png'
function TodoList() {
  const [tasks, setTasks] = useState([]);
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
    setIsAddingTask(true);
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
          <div className='output-style'>
              {tasks.map((task, index) => (
                <div key={index} className='task-item'>
                  <div className='task-row'>
                  <span className='task-text'>{task}</span>
                  <div className='icons-container'>
                    <input type="checkbox" className='check-icon'/>
                    <span className='space'></span>
                    <span className='right-icons'>
                      <i className='icon edit-icon'> <img src={pen} alt="icone de lapis" /></i>
                      <i className='icon delete-icon'><img src={trash} alt="icone de lixeira" /></i>
                    </span>
                   </div>
                  </div>
                </div>
              ))}
            </div>
          <div className='task-container'>         
          <h3 className="icon-style">Nova tarefa...</h3>
          <div className='input-container'>
           
          {isAddingTask ? (
            <div className='input-text'>
              <input type="text" value={currentTask} onChange={handleTaskChange} />
              <button onClick={handleTaskAdd}>Adicionar</button>
            </div>  
          ) : (
            <button className='plus-input add-button' onClick={handleAddButtonClick}><img src={plus} alt="icone de +" /></button>

          )}
          </div>
          </div>
      </div>
    </div>
  )
}



export default TodoList;

