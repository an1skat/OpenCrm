import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../utils/authContext";
import { useNavigate } from "react-router-dom";

const AuthMe = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            throw new Error("No authentication token available.");
        }

        const response = await axios.post(
            "https://opencrm-backend.onrender.com/auth/me",
            null,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            }
        );

        console.log(response.data)
        console.log("Login successful");

        authContext.setLoginStatus(true)
        authContext.setAuthToken(authToken);
        navigate("/home");
      } catch (err) {
        console.error("Login failed:", err);
        authContext.setLoginStatus(false);
        navigate("/auth");
      }
    };

    fetchData();
  }, [authContext, navigate]);

  return null;
};

export default AuthMe;
