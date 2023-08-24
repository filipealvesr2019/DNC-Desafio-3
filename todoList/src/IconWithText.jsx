import React, { useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

function App() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleIconClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSaveClick = () => {
    setDisplayText(inputText);
    setInputText('');
    setInputVisible(false);
  };

  return (
    <div>
      <h1>React Text Input Example</h1>
      
      {isInputVisible ? (
        <div>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Digite seu texto"
          />
          <button onClick={handleSaveClick}>Salvar</button>
        </div>
      ) : (
        <div>
          <span>Texto exibido: {displayText}</span>
          <button className="transparent-button"  onClick={handleIconClick}>
            <IoMdAdd /> Editar
          </button>
          <img src="o caminho pro meu icone.png" onClick={'funçao de clique'} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
