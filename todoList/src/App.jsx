import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
import IconWithText from './IconWithText';
function App() {
  return (
    <div>
      <h1>Exemplo de Ícone com Texto</h1>
      <span><img src="../images/plus.png" alt="" /><IconWithText /></span>
      <IconWithText />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App
