import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Register from "./subpages/Register";
import Auth from "./subpages/Auth";
import AuthMe from "./subpages/AuthMe";
import { AuthRedirect } from "./utils/Redirect";
import "./styles/style.css";

function App() {
  const location = useLocation();

  const hide =
    location.pathname === "/auth" || location.pathname === "/register";
  return (
    <div className="App">
      <div className="app-container">
        {!hide && <Navbar />}

        <Routes>
          <Route path="/" element={<AuthRedirect />} />
          <Route path="/auth/me" element={<AuthMe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
