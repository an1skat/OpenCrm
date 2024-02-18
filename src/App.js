import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./subpages/Register";
import Auth from "./subpages/Auth";
import { AuthRedirect } from "./utils/Redirect";

function App() {
  const location = useLocation();
  return (
    <div className="App">
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
