import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./subpages/Register";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;