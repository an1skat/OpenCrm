import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LogoSvg,
  LogoutSvg,
  SmallAvatarSvg,
  GroupSvg,
  BuildingSvg,
  ShareSvg,
  ContractSvg,
  DealSvg,
  SettingsSvg,
} from "./Svg";
import "../styles/style.css";
import { useAuth } from "../utils/authContext";
import GetMe from "../utils/getMe";

const Navbar = () => {
  const { userFirstName, userLastName, userAvatar } = GetMe();
  const { isLogin } = useAuth();
  return (
    <section className="navbar-section">
      <Link to="/home" className="navbar-logo link">
        <LogoSvg />
      </Link>
      <nav className="nav">
        <ul className="nav-list list">
          <li className="nav-list-item">
            {isLogin ? (
              <>
                {userAvatar ? (
                  <img
                    src={`https://opencrm-backend.onrender.com/avatars/${userAvatar}`}
                    alt="user avatar"
                    width="26"
                    height="26"
                    style={{ borderRadius: "50%" }}
                    className="user-nav-avatar"
                  />
                ) : (
                  <SmallAvatarSvg />
                )}
                {userFirstName && userLastName ? (
                  <Link to="/profile" className="user-nav-link link">
                    {userFirstName} {userLastName}
                  </Link>
                ) : (
                  <Link to="/profile" className="user-nav-link link">
                    Иван Иванов
                  </Link>
                )}
              </>
            ) : (
              <>
                <SmallAvatarSvg />
                <Link to="/profile" className="user-nav-link link">
                  Иван Иванов
                </Link>
              </>
            )}
            <LogoutSvg />
          </li>
          <li className="nav-list-item">
            <Link to="/users" className="nav-link link">
              <div className="nav-link-container">
                <GroupSvg />
                <p className="nav-link-text">Пользователи</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/groups" className="nav-link link">
              <div className="nav-link-container">
                <BuildingSvg />
                <p className="nav-link-text">Группы компаний</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/clients" className="nav-link link">
              <div className="nav-link-container">
                <ShareSvg />
                <p className="nav-link-text">Контрагенты</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contracts" className="nav-link link">
              <div className="nav-link-container">
                <ContractSvg />
                <p className="nav-link-text">Контракты</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/deals" className="nav-link link">
              <div className="nav-link-container">
                <DealSvg />
                <p className="nav-link-text">Сделки</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/settings" className="nav-link link">
              <div className="nav-link-container">
                <SettingsSvg />
                <p className="nav-link-text">Настройки</p>
              </div>
              <button className="nav-btn link">
                <div className="nav-btn-arrow"></div>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
