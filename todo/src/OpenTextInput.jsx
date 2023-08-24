import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import './App.scss';


function App(){
    const [isInputVisible, setInputVisible] = useState(false);
    const [displayText, setDisplayText] = useState([]);
    const [inputText, setInputText] = useState('');

    
    const handleIconClick = () => {
        setInputVisible(true);
    }

    const handleInputChange = (Event) =>{
        setInputText(Event.target.value)
    }

    const handleSaveClick = () =>{
        if(inputText.trim() !== '' ){
        setDisplayText([...displayText, inputText]);
        setInputText('');
        setInputVisible(false);
        }

    }
    



    return (
        <div>
            
            {displayText.map((text, index) =>(
                <div  key={index}  className="saved-text">
                    {index + 1}: {text}
                </div>
            ))}
            {isInputVisible ?(
                <div>
                     <input type="text" onChange={handleInputChange} placeholder='Digite a tarefa...'/>
                     <button onClick={handleSaveClick}>Salvar</button>
                </div>
               
            ):(
            <div>
                <button className='transparent-button' onClick={handleIconClick}>
                    <IoMdAdd  className='icon-style'></IoMdAdd>
                </button>
            </div>
            )}
        </div>
    )
    
}











export default App;

