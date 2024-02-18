import React, { useState } from "react";
import "./styles/style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Svg";

const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    console.log(e.target);
    console.log(e.target.surname.value);
    const formData = {
        email: e.target.email.value,
        firstName: e.target.firstname.value,
        lastName: e.target.lastname.value,
        surname: e.target.surname.value,
        password: e.target.password.value,
      };
  
      try {
        const newFormErrors = {};
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          console.log("Incorrect email format");
          newFormErrors.email = "Некорректная почта";
        }
  
        const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/;
        if (!nameRegex.test(formData.firstName)) {
          console.log("Incorrect firstname");
          newFormErrors.firstName =
            "Имя должно содержать от 3 до 20 буквенных символов";
        }
        if (!nameRegex.test(formData.lastName)) {
          console.log("Incorrect lastname");
          newFormErrors.lastName =
            "Фамилия должна содержать от 3 до 20 буквенных символов";
        }
        if (!nameRegex.test(formData.surname)) {
          console.log("Incorrect surname");
          newFormErrors.surname =
            "Отчество должно содержать от 3 до 20 буквенных символов";
        }
  
        if (formData.password.length < 8 || formData.password.length > 15) {
          console.log("Incorrect password");
          newFormErrors.password = "Пароль должен содержать от 8 до 15 символов";
        }
  

      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length > 0) {
        console.log("Form has errors");
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post(
        "https://opencrm-backend.onrender.com/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      console.log("User registered successfully");
      navigate("/auth")
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="register-section">
      <div className="container">
        <Logo />
        <h2 className="register-title">Регистрация</h2>
        <form
          onSubmit={handleSubmit}
          className="register-form"
          id="register-form"
          method="POST"
        >
          <input
            className="register-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <label className="register-label" htmlFor="email">
            Email
          </label>
          <input
            className="register-input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Фамилия"
          />
          <label className="register-label" htmlFor="lastname">
            Фамилия
          </label>
          <input
            className="register-input"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Имя"
          />
          <label className="register-label" htmlFor="firstname">
            Имя
          </label>
          <input
            className="register-input"
            type="text"
            name="surname"
            id="surname"
            placeholder="Отчество"
          />
          <label className="register-label" htmlFor="surname">
            Отчество
          </label>
          <input
            className="register-input"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />
          <label className="register-label" htmlFor="password">
            Пароль
          </label>

          <div className="register-container">
            <button type="submit" className="register-btn">
              Регистрация
            </button>
            <p className="register-text">
              Уже есть аккаунт?
              <br />
              <Link to="/auth" className="register-link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
