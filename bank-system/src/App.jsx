import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import DisplayPage from "./pages/DisplayScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/display" element={<DisplayPage />} />
    </Routes>
  );
}

export default App;
