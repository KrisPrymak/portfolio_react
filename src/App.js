import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Projects from "./components/main/Projects";

function App() {
  return (
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
