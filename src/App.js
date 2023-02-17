import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import ReactProjects from "./components/ReactProjects";
import Landings from "./components/landings/Landings";
import Games from "./components/Games";

function App() {
  return (
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reactProjects" element={<ReactProjects />} />
        <Route path="/landings" element={<Landings />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
