import React, { useState } from 'react';
import './App.scss';
import OpenTextInput from './OpenText';
import SavedTasksDisplay from './SavedTasksDisplay'
function App() {
  const [savedText, setSavedText] = useState([]); // Inicialize a variável savedText
  const addSavedText = (newText) => {
    setSavedText([...savedText, newText]);
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
          <div className='savedText'>
          <SavedTasksDisplay savedTasks={savedText} />

          </div>
          <div className='task-container'>
            <div className="saved-tasks">
            <h3>Tarefas Salvas</h3>

            
            </div>         
          <h3>Nova tarefa...</h3>                  <OpenTextInput addSavedText={addSavedText} />

         
         </div>
      </div>
    </div>
  )
}



export default App
