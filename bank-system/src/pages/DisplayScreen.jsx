import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


function DisplayScreen({count}) {
  
    const navigate = useNavigate();
    
    useEffect(() => {
      if(count > 0){
        const speech = new SpeechSynthesisUtterance(`Token number ${count}`)
        speechSynthesis.speak(speech)
      }
    }, [count])
    

    return (
    <div>
      <h1>{count -1}</h1>

      <button onClick={() => navigate("/admin")}>Go back to Admin Panel</button>
    </div>
  )
}

export default DisplayScreen
