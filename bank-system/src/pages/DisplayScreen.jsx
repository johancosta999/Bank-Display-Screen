import { useNavigate } from "react-router-dom"


function DisplayScreen({count}) {
  
    const navigate = useNavigate();
    
    

    return (
    <div>
      <h1>{count -1}</h1>

      <button onClick={() => navigate("/")}>Go back to Admin Panel</button>
    </div>
  )
}

export default DisplayScreen
