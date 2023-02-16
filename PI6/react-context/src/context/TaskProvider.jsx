import { createContext, useState, useEffect } from "react";

// Create context
const TaskContext = createContext();


// The provider component
export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([])
    useEffect(()=>{ fetchTasks()}, [])
    
  
    function toggleComplete(id){
     const updatedTasks = [...tasks];
     const index = updatedTasks.findIndex(task=> task.id ==id);
     updatedTasks[index].completed = !updatedTasks[index].completed 
     setTasks(updatedTasks)
    }
  
    function deleteTask(id){
      const updatedTasks = tasks.filter(task=> task.id !==id)
      setTasks(updatedTasks);
    }
  
    async function fetchTasks(){
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(res.ok){
          const data = await res.json();
          setTasks(data);
          console.log(data);
        }
  
      }catch(err){
        console.log(err)
      }
    }
 
return (
    <TaskContext.Provider value={{tasks, toggleComplete, deleteTask}}>
        {children}
    </TaskContext.Provider>

  )
}



// export context
export default TaskContext;