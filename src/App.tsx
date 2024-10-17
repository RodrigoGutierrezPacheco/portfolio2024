import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
