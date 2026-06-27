import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import AdminPanel from "./pages/AdminPanel";
import DisplayPage from "./pages/DisplayScreen";
import LoginPage from "./pages/LoginPage";

function App() {

  const [count, setCount] = useState(1);
  const [task, setTask] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPanel count={count} setCount={setCount} task={task} setTask={setTask} />} />
      <Route path="/display" element={<DisplayPage count={count} task={task} />} />
    </Routes>
  );
}

export default App;
