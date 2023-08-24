import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import './App.scss';


function App(){
    const [isInputVisible, setInputVisible] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [inputText, setInputText] = useState('');

    
    const handleIconClick = () => {
        setInputVisible(true);
    }

    const handleInputChange = (Event) =>{
        setInputText(Event.target.value)
    }

    const handleSaveClick = () =>{
        setDisplayText(inputText);
        setInputText('');
        setInputVisible(false);

    }
    



    return (
        <div>
            {isInputVisible ?(
                <div>
                     <input type="text" onChange={handleInputChange} placeholder='Digite a tarefa...'/>
                     <button onClick={handleSaveClick}></button>
                </div>
               
            ):(
            <div>
                <button onClick={handleIconClick}>
                    <span>{displayText}</span>
                    <IoMdAdd></IoMdAdd>
                </button>
            </div>
            )}
        </div>
    )
    
}











export default App;


