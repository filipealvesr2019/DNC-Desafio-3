import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="bottom-left">
        <div class="word">Organização</div>
        <div class="word background-word">Tarefas</div>
      </div>
     
    </div>
  )
}

export default App
