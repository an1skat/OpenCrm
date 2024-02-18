import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./subpages/Register";
import Auth from "./subpages/Auth";
import { AuthRedirect } from "./utils/Redirect";

function App() {
  const location = useLocation();

  const hide =
    location.pathname === "/auth" || location.pathname === "/register";
  return (
    <div className="App">
      {!hide && <Navbar />}

      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
