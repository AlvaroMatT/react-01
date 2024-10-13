import React from "react";
import { Todo } from "../App";
import { Trash2 } from "lucide-react";

export interface TaskProp {
    todoList: Todo[]
    updateTask: (id:string, completed:boolean)=>void
    handleDelete: (element:string)=>void
  }
const Task:React.FC<TaskProp>= ({todoList, updateTask, handleDelete})=>{

    const listTask = todoList.map((taskElement) => 
      <React.Fragment key={taskElement.id}>
      <main className='main-task'> 
        <input className='custom' type="checkbox" checked={taskElement.completed} onChange={()=>{updateTask(taskElement.id, !taskElement.completed)}}/>
        <span>{taskElement.title}</span>
        <button  onClick={()=>handleDelete(taskElement.id)} style={{fontSize: '12px'}}>
        <Trash2 size={14}/>
        </button>
      </main>
      <span className="description">{taskElement.description}</span></React.Fragment>
      ); 
    console.log(todoList)
  
    return (
      <>
        {todoList.length > 0 && 
                <article style={{
                    border: '1px solid white',
                    borderRadius: '20px',
                    padding: '20px'
                  }}>
                    <header style={{color: 'white'}}></header>
                    {listTask}
                  </article>
        }
      </>
    )
  }
  export default Task