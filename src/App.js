import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Settings from "./pages/Settings";
import Register from "./subpages/Register";
import Auth from "./subpages/Auth";
import AuthMe from "./subpages/AuthMe";
import { AuthRedirect } from "./utils/Redirect";
import "./styles/style.css";

function App() {
  const location = useLocation();

  // Переменная, которая будет управлять классами стилей
  const containerClassName = !["/auth", "/register"].includes(location.pathname)
    ? "flex-container"
    : "block-container";

  return (
    <div className="App">
      <div className={`app-container ${containerClassName}`}>
        {containerClassName === "flex-container" && <Navbar />}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/groups" element={<Groups/>} />
        </Routes>
      </div>

      <Routes>
        <Route path="/auth/me" element={<AuthMe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<AuthRedirect />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
