import './App.scss';
import React, { useState } from 'react';
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
        <div class="line-container">
          <div class="line"></div>
          </div>
          <div className='task-container'>
          <h3>Nova tarefa...</h3><img onClick={'taskOpen'} src="/images/plus.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default App
