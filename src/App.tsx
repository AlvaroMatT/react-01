import './App.css'
import { useEffect, useState } from 'react';
import TaskForm from './componentes/TaskForm';
import {nanoid} from 'nanoid';
import Task from './componentes/Task';
export interface Todo {
  id:string,
  title: string;
  description: string;
  completed: boolean;
}

const mockData: Todo[] = [{
  id: 'id1',
  title:'titulo',
  description:'esta es la primera tarea',
  completed: true
},
{
  id:'id2',
  title:'tarea 2',
  description:'esta es la segunda  tarea',
  completed: true
}]
const TODOS = 'TODOS'
function getDataLocalStorage(){
  const storedData = localStorage.getItem(TODOS)
  return storedData ? JSON.parse(storedData) : mockData
}
function saveDataLocalStorage(todos:Todo[]){
  localStorage.setItem(TODOS,JSON.stringify(todos))
  console.log('se han guardado estos datos', todos)
}
function App() {
  const [todo,setTodo] = useState<Todo[]>(getDataLocalStorage);
  const [taskRemain, setTaskRemain] = useState<number>()
  useEffect(()=>{
    saveDataLocalStorage(todo)
    setTaskRemain(calcTaskRemaining())
  },[todo])

  const addTask =(title:string, description:string)=>{
    const newTask :Todo= {
      id : nanoid(),
      title: title,
      description: description,
      completed: false
    }
    setTodo(prevTodo => [...prevTodo, newTask])
  }

  function updateTask(id:string,completed:boolean){
    setTodo(prevTodo =>
      prevTodo.map(todo => 
        todo.id === id ? {...todo, completed}: todo))
  }
  function handleDelete(element:string){
    const todoUpdated:Todo[] = todo.filter(task =>task.id !== element)
    setTodo(todoUpdated)
  }

  function calcTaskRemaining():number{
    return todo.filter(item => item.completed === false).length
    
  }
  function limpiarCompletadas(){
    const todoUpdated:Todo[] = todo.filter(item => item.completed === false);
    console.log(todoUpdated)
    setTodo(todoUpdated)
  }
  return (
    <>
      <TaskForm addTask={addTask}></TaskForm>
      <Task todoList={todo} handleDelete={handleDelete} updateTask={updateTask} ></Task>
      <div className='bottom-container'>
        <span>{taskRemain} Tareas restantes</span>
        <button className='delete-completed-task' onClick={limpiarCompletadas}>Delete completed tasks</button>
      </div>
    </>
  )
}




export default App
