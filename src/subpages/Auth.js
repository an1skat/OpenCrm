import React, { useEffect, useState } from "react";
import "./styles/style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LogoSvg } from "../components/Svg";
import { useAuth } from "../utils/authContext.js";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginStatus } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const form = document.getElementById("auth-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let elem = e.target;

      let formData = {
        email: elem.email.value,
        password: elem.password.value,
      };

      try {
        const response = await axios.post(
          "https://opencrm-backend.onrender.com/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { token, ...userData } = response.data;

        localStorage.setItem("authToken", token);
        console.log('Login successful:', userData);
        setLoginStatus(true);
        navigate("/home");
      } catch (err) {
        console.error("Error during login:", err);
        setLoginStatus(false);
      }
    });
  });
  return (
    <section className="auth-section">
      <div className="container">
        <LogoSvg />
        <h2 className="auth-title">Аутентификация</h2>
        <form
          //   onSubmit={handleSubmit}
          className="auth-form"
          id="auth-form"
          method="POST"
        >
          <input
            className="auth-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input
            className="auth-input"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />
          <label className="auth-label" htmlFor="password">
            Пароль
          </label>

          <div className="auth-container">
            <button type="submit" className="auth-btn">
              Войти
            </button>
            <p className="auth-text">
              Еще нет аккаунта?
              <br />
              <Link to="/register" className="auth-link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
