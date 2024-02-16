import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;