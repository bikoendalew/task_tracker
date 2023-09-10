import Task from "./Task";

const TaskList=({task,onDelete,onToggel})=>{
return (
    <>
        {task.map((task,index)=>
                 (
            <Task key={index} task={task} 
            onDelete={onDelete} 
            ontoggel={onToggel}
            />
                 )
       )}
    </>
)
}

export default TaskList