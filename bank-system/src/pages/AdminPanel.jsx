import  { useState } from 'react'

function AdminPanel() {
    const [count, setCount] = useState(0);

    const increment = () => {
        event.preventDefault();
        setCount(prevCount => prevCount + 1)
        alert("Next Task Number is : "+count)
    }

  return (
    <div>
      <button onClick={increment}>Task Finished</button>
    </div>
  )
}

export default AdminPanel
