import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const email =document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        if(email === "admin@gmail.com" && password === "admin123") {
                navigate("/admin")
        } else if(email === "dislay@gmail.com" && password === "display"){
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
        />

        <h5>Enter password : </h5>
        <input 
            name="password"
            placeholder="Password"
            type="password"
        />

        <button onClick={handleLogin}>Login</button>
        
    </div>
  )
}

export default LoginPage
