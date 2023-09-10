import Header  from "./components/Header";
import TaskList from "./components/TaskList";
import './index.css';
import AddTask from "./components/AddTask";
import { useState,useEffect } from "react"

function App() {

useEffect(()=>{
  const getTask=async()=>{
    const getTaskfromserver=await fetchTasks()
    setTask(getTaskfromserver)
  }
  getTask()
},[])
//fetch tasks
const fetchTasks=async()=>{
  const responce=await fetch('http://localhost:4000/tasks')
  const data= await responce.json()
  
  return data
}
//fetch task
const fetchTask=async(id)=>{
  const responce=await fetch(`http://localhost:4000/tasks/${id}`)
  const data= await responce.json()
  
  return data
}
//delete form

const DeleteTask=async(id)=>{
  await fetch(`http://localhost:4000/tasks/${id}`,{
    method:'DELETE'
  })
setTask(tasks.filter((task)=>task.id!==id));
}
//add task
const Add=async(task)=>{
  const res=await fetch('http://localhost:4000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })
  const data=await res.json()
  setTask([...tasks, data])
}
//toggel reminder
const ToggleReminder =async(id)=>{
  const tasktoToggle=await fetchTask(id)
  const updateTask={ ...tasktoToggle, reminder:!tasktoToggle.reminder}
  const res=await fetch(`http://localhost:4000/tasks/${id}`,
  {
    method:'PUT',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(updateTask)
  })
  const data=await res.json();
  setTask(tasks.map((t)=>t.id === id? {...t, reminder:data.reminder }:t  ))
}
//show add form
const show=()=>{
setShowAddForm(!showAddForm)
}
const[showAddForm,setShowAddForm]=useState(false)
const[tasks,setTask]=useState(['']);
  return (
    <div className="container">
      <Header title="Tasks" click={show} show={showAddForm}/>

  {showAddForm && <AddTask add={Add}/>}
  {tasks.length !== 0 ? <TaskList task={tasks} onDelete={DeleteTask} onToggel={ToggleReminder}/> : <h2>No Data</h2>}

    </div>
   
  );
}

export default App;
