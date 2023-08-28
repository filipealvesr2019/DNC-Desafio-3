import React from 'react';

function SavedTasksDisplay({savedTasks}){
  return (
    <div>
    {savedTasks.map((text, index) =>(
      <div  key={index}  className="saved-text">
          {index + 1}: {text}
  
      </div>
      
  ))}
  </div>
  ) 
  }

  export default SavedTasksDisplay;
  