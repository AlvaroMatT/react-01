import { Trash2 } from 'lucide-react'
import './App.css'
import React, { useEffect, useState } from 'react';

interface Todo {
  id:number,
  title: string;
  description: string;
  completed: boolean;
}
interface TaskProp {
  todoList: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}
function App() {
  const [todo,setTodo] = useState<Todo[]>([]);
  useEffect(()=>{
    setTodo([{
      id:1,
      title:'titulo',
      description:'esta es la primera tarea',
      completed: true
    },
    {
      id:2,
      title:'tarea 2',
      description:'esta es la segunda  tarea',
      completed: true
    }])
  },[])
  return (
    <>
      <TaskForm></TaskForm>
      <Task todoList={todo} setTodo={setTodo} ></Task>
    </>
  )
}

const Task:React.FC<TaskProp>= ({todoList, setTodo})=>{

  
  const listTask = todoList.map((taskElement) => 
    <React.Fragment key={taskElement.id}>
    <main className='main-task'> 
      <input className='custom' type="checkbox" checked={taskElement.completed}/>
      <span>{taskElement.title}</span>
      <button  onClick={()=>handleDelete(taskElement.id)} style={{fontSize: '12px'}}>
      <Trash2 size={14}/>
      </button>
    </main>
    <span>{taskElement.description}</span></React.Fragment>
    ); 
  function handleDelete(element:number){
    const todoUpdated:Todo[] = todoList.filter(task =>task.id != element)
    setTodo(todoUpdated)
  }

  return (
    <>
      <article style={{
        border: '1px solid white',
        borderRadius: '20px',
        padding: '20px'
      }}>
        <header style={{color: 'white'}}></header>
        {listTask}
      </article>
    </>
  )
}

const TaskForm = ()=>{
  const [title, setTitle] =useState('');
  const [description, setDescription] =useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Puedes usar el evento si lo necesitas
    console.log('No me borres!');
  };

  return (
    <>
      <input type="text" placeholder='Add a task' />
      <input type="text" placeholder='Add a description'/>
    </>
  )
}
export default App
