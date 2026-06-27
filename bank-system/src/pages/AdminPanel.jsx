import { useNavigate } from "react-router-dom"

function AdminPanel({ count, setCount, task, setTask }) {
    
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

      {
        count > 0? (
          <div><h1>The task is {count - 1}</h1></div>
        ) :

        (
          <div><h1>Welcome Back, Admin!</h1></div>
        )

      }
    
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
