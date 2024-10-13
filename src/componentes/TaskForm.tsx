import React from "react";
import { useState } from "react";
import './TaskForm.css'

interface TaskForm {
  addTask: (title:string, description:string)=>void;
}

const TaskForm:React.FC<TaskForm> = ({addTask})=>{
    const [title, setTitle] =useState('');
    const [description, setDescription] =useState('');
    const [error, setError]= useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Puedes usar el evento si lo necesitas
      event.preventDefault()
      if(title != ''){
        addTask(
          title,
          description
        )
        setError
      }else {
        setError(true);
      }

    };
  
    return (
      <div className="task-form-container">
        <input type="text" placeholder='Add a task' value={title} onChange={(event)=> setTitle(event.target.value)} />
        <input type="text" placeholder='Add a description' value={description} onChange={(event)=> setDescription(event.target.value)}/>
        <button className="add-task" onClick={handleClick}>Add task</button>
        <div>
          { error && <span>El título es obligatorio</span>}
        </div>
      </div>
    )
  }
export default TaskForm