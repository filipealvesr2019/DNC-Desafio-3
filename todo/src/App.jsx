import React from 'react';
import './App.scss';
import OpenTextInput from './OpenTextInput';

function App() {
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
          <OpenTextInput />
            <div className="saved-tasks">
            <h3>Tarefas Salvas</h3>
          
            
            </div>         
          <h3>Nova tarefa...</h3>
          <OpenTextInput displayOnly={true}/>
         </div>
      </div>
    </div>
  )
}


export default App
