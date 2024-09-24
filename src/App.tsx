import { Trash2 } from 'lucide-react'
import './App.css'

function App() {

  
  return (
    <>
      <TaskForm></TaskForm>
      <Task></Task>
    </>
  )
}
const TaskForm = ()=>{
  const title = '';
  const description = '';

  return (
    <>
      <input type="text" placeholder='Add a task' />
      <input type="text" placeholder='Add a description'/>
    </>
  )
}
const Task = ()=>{
  const titulo = "titulo de la tarea"
  const description = 'Esta es la descripción de la tarea'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Puedes usar el evento si lo necesitas
    console.log('No me borres!');
  };
  return (
    <>
      <article>
        <header style={{color: 'white'}}>{titulo}</header>
        <main className='main-task'> 
          <input className='custom' type="checkbox"/>
          <span>{description}</span>
          <button onClick={handleClick} style={{fontSize: '12px'}}>
          <Trash2 size={14}/>
          </button>
        </main>
      </article>
    </>
  )
}
export default App
