import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        if(!email || !password) {
            alert("Please enter both fields!!!")
            return;
        }

        if(email === "admin@gmail.com" && password === "admin123") {
                navigate("/admin")
        } else if(email === "display@gmail.com" && password === "display"){
                navigate("/display")
        } else {
            navigate("/")
        }
    }

  return (
    <div>
        <h5>Enter email : </h5>
        <input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
        />

        <h5>Enter password : </h5>
        <input 
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}
        />

        <button onClick={handleLogin}>Login</button>
        
    </div>
  )
}

export default LoginPage
