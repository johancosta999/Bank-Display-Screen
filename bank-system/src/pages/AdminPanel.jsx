import  { useState } from 'react'
import { useNavigate } from "react-router-dom"

function AdminPanel() {
    const [count, setCount] = useState(0);
    const [task, setTask] = useState(false);
    const navigate = useNavigate()

    const increment = () => {
        event.preventDefault();
        setCount(prevCount => prevCount + 1)
        alert("Next Task Number is : "+count)
    }



    const taskHandler = () => {
      setTask(true)
    }

  return (
    <div>
    {task ? 
    (
      <div>
        <button onClick={increment}>Task Finished</button>
      </div>
    ) : 
    
    (
      <div>
        <button onClick={taskHandler}>Start</button>
      </div>
    )
   }

   <button onClick={() => navigate("/display")}>Go to Display Page</button>
   </div>
  )
}

export default AdminPanel
